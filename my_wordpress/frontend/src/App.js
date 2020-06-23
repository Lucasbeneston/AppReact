import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Routes from "./components/Routes";

import {BrowserRouter as Router} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes />
      <Footer />
    </Router>
  );
}