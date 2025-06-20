import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ You missed this
import "./About.css";

const chapters = [
  { icon: "📘", title: "Set Theory", description: "Venn diagrams, subsets, and types of sets." },
  { icon: "🔗", title: "Relations & Functions", description: "Mappings, domain-range, function types." },
  { icon: "🎲", title: "Combinatorics & Permutations", description: "Permutations, combinations, counting." },
  { icon: "📉", title: "Probability", description: "Events, outcomes, and probability rules." },
  { icon: "📊", title: "Statistics", description: "Mean, median, mode, and data analysis." },
  { icon: "📈", title: "Differentiation", description: "Derivatives, slope, rate of change." },
  { icon: "🔽", title: "Integration", description: "Integration techniques and areas." },
  { icon: "🔁", title: "Limits & Continuity", description: "Concepts of limits and continuity." },
  { icon: "🔢", title: "Number Theory", description: "Primes, divisibility, number patterns." },
  { icon: "📐", title: "Trigonometry", description: "Sine, cosine, tangent, identities." }
];

const About = () => {
  const navigate = useNavigate(); // ✅ You also missed this line

  return (
    <div className="about-wrapper">
      <h1 className="main-heading">
        Master Math with Confidence – Welcome to Maths Become Easy
      </h1>
      <p className="intro">
        This platform is built to make math easier, more understandable. This site gives you the tools, questions, and practice you need to grow stronger with every topic. With organized chapters, difficulty levels, and saved progress, this site helps you stay on track and improve every day — with zero pressure.
      </p>

      <h2 className="sub-heading">📚 Chapters</h2>
      <div className="about-chapter-list">
        {chapters.map((chapter, index) => (
          <div className="about-chapter-card" key={index}>
            <div className="about-icon-round">{chapter.icon}</div>
            <h3 className="about-chapter-title">{chapter.title}</h3>
            <p className="about-chapter-desc">{chapter.description}</p>
          </div>
        ))}
      </div>

      <div className="about-personal-section">
        <img
          src="myprofile4..jpg"
          alt="my Profile"
          className="about-profile-pic"
        />
        <h2 className="about-personal-heading">On a Journey from Code to Concepts</h2>
        <p className="about-personal-desc">
          I'm a learner who, like many others, once focused deeply on coding and forgot how essential math really is.
          <br /><br />
          But over time, I realized math isn’t just about numbers — it’s the base of logic, programming, and the way we solve real-world problems.
          <br /><br />
          That’s why I created <strong>Maths Become Easy</strong> — not just as a website, but as a space to grow, revisit basics, and help others do the same.
          <br /><br />
          <em>Learning is a journey — not a race.</em>
        </p>
      </div>

      <div className="about-home-button-section">
        <button
          className="about-home-button"
          onClick={() => navigate("/")}
        >
        Go to Home
        </button>
      </div>
      <div className="about-connect-section">
  <h2 className="connect-heading">Connect With Me</h2>
  <div className="social-icons">
    <a href="https://www.linkedin.com/in/saurabh-sanwal-7147442b7/" target="_blank" rel="noopener noreferrer">
      <img src="linkdin.png" alt="LinkedIn" className="social-icon-img" />
    </a>
    <a href="https://www.instagram.com/saurabh_sanwal_2006/" target="_blank" rel="noopener noreferrer">
      <img src="instagram.png" alt="Instagram" className="social-icon-img" />
    </a>
    <a href="https://github.com/Saurabh-Sanwal" target="_blank" rel="noopener noreferrer">
      <img src="github.png" alt="GitHub" className="social-icon-img" />
    </a>
    <a href="mailto:saurabhsanwal01@gmail.com">
      <img src="mail.png" alt="Email" className="social-icon-img" />
    </a>
  </div>
</div>


    </div>
  );
};

export default About;
