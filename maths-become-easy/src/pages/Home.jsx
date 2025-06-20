import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

const rotatingTaglines = [
  "Practice. Progress. Perform.",
  "Built for Students, Loved by Learners.",
  "Making Math Simple, Step by Step.",
  "Start Your Math Journey Today."
];

const animatedLines = [
  "My name is Saurabh Sanwal.",
  "Let’s make learning joyful, not stressful.",
  "'Maths Become Easy' is my small step to help others.",
  "I created Maths Become Easy for all learners.",
  "This project is made with ❤️ for education."
];

const chapters = [
  "Set Theory",
  "Relations & Functions",
  "Combinatorics & Permutations",
  "Probability",
  "Statistics",
  "Differentiation",
  "Integration",
  "Limits & Continuity",
  "Number Theory",
  "Trigonometry"
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === rotatingTaglines.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fullText = animatedLines[currentLine];
    let charIndex = 0;

    const typeLine = () => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeLine, 60);
      } else {
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % animatedLines.length);
        }, 1500);
      }
    };

    typeLine();
  }, [currentLine]);

  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="main-line">
          Welcome to <span className="highlight">Maths Become Easy</span>
        </h1>
        <h2 className="rotating-line">{rotatingTaglines[currentIndex]}</h2>
      </div>

      <div className="home-image">
        <img src="websitelogo2.png" alt="Maths Become Easy Logo" />
      </div>

      <div className="chapter-section">
        <h2 className="chapter-heading">Chapters You’ll Master in Math</h2>
        <p className="chapter-subheading">Start from the basics. Build mastery with practice.</p>
        <div className="chapter-grid">
          {chapters.map((chapter, index) => (
            <div className="chapter-box" key={index}>{chapter}</div>
          ))}
        </div>
        <div className="view-button-container">
          <button className="view-button" onClick={() => navigate("/chapters")}>
            View Chapters & Solve Questions
          </button>
        </div>
      </div>

      <div className="progress-section">
        <h2 className="progress-heading">📈 Track Your Math Journey</h2>
        <p className="progress-subheading">Monitor your performance from Easy to Hard questions.</p>
        <div className="progress-visual">
          <img src="/progresslogo.png" alt="Progress Tracker" className="progress-logo" />
          <div className="ball-animation-section">
            <div className="progress-ground">
              <img src="/progresslevel.png" alt="Rolling Ball" className="rolling-ball" />
            </div>
          </div>
          <div className="view-progress-button-container">
            <button className="view-progress-button" onClick={() => navigate("/progress")}>
              View Your Progress
            </button>
          </div>
        </div>
      </div>

      <div className="final-home-section dark-bg">
        <div className="final-image">
          <img src="saurabh.jpg" alt="Saurabh Sanwal" className="static-image shadowed" />
        </div>

        <div className="final-content">
          <h2 className="animated-line blue-text shadow-text">{displayedText}</h2>
          <p className="website-desc">
          "Maths Become Easy is a website I made to help students understand math in a simple way. I created this site to
           make learning math easier for everyone. If math feels confusing, you’re not alone — this 
           website explains everything step by step so you can learn at your own pace. I’m a student too,
           and I built this for others like me who want to learn math without stress. It’s simple, helpful, and made with care."
          </p>
          <p className="final-tagline">"Built with passion, this platform is the help I once needed — now it's here for you."</p>
          <Link to="/about" className="about-nav-btn dark-orange">Know More About Me →</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
