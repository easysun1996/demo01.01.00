import React, { useState, useEffect } from 'react';
import SlideEditor from './component/SlideEditor';
import './styles/main.scss';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const root = createRoot(document.getElementById("root"));
  const [slides, setSlides] = useState([]);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <BrowserRouter>
      <h1>Sample ver01.00.00</h1>
      <SlideEditor initialSlides={slides} setSlides={setSlides} />
    </BrowserRouter>
  );
};

export default App;
