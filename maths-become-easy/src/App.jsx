import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Chapters from './pages/Chapters';
import ChapterPage from './pages/ChapterPage'; // ✅ New component
import Progress from './pages/Progress';
import About from './pages/About';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/chapters',
    element: (
      <>
        <Navbar />
        <Chapters />
      </>
    ),
  },
  {
    path: '/chapters/:chapterId', // ✅ Dynamic chapter route
    element: (
      <>
        <Navbar />
        <ChapterPage />
      </>
    ),
  },
  {
    path: '/progress',
    element: (
      <>
        <Navbar />
        <Progress />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
