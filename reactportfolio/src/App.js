import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Portfolio from "./pages/Portfolio/portfolio";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
