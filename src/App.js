import React, { lazy, useEffect, useRef, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Spinner from './components/Spinner';

const Flashpage = lazy(() => import('./pages/Flashpage'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Homepage = lazy(() => import('./pages/Homepage'));
const Webdevelopment = lazy(() => import('./pages/Webdevelopment'));
const Course = lazy(() => import('./pages/Course'));

const ScrollToTop = () => {
  const pathname = useLocation();
  const prevPathname = useRef();

  useEffect(() => {
    if (prevPathname.current !== pathname.pathname) {
      window.scrollTo(0, 0);
      prevPathname.current = pathname.pathname;
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <Suspense fallback={<p style={{ textAlign: 'center' }}><Spinner/></p>}>
        <Routes>
          <Route path="/" element={<Flashpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/web" element={<Webdevelopment />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
    </Router>
  );
}

export default App;
