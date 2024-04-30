import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Pages/HomePage";
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (

    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />

    </Router>

  );
}

export default App;
