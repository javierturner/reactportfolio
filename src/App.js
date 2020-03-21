import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Portfolio from "./pages/Portfolio/portfolio";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Navbar />
        <Wrapper>
          <BrowserRouter basename="src">
            <Route exact path={["/", "/about", "/home"]} component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </BrowserRouter>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
