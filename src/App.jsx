import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Container from './components/container/Container';
import Theme from './components/ThemeContext';
import Test from './components/test';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Update the document title based on the current route
    if (location.pathname === '/') {
      document.title = 'Web Link';
    } else {
      document.title = 'Multiple Link';
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
