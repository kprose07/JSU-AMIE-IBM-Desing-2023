import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';


//pages
import Home from './pages/Home';
import About from './pages/About';
import Solution from './pages/Solution';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Solution" element={<Solution />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


