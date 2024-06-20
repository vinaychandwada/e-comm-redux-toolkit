import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Widget/Navigation';
import Header from './Widget/Header';

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
