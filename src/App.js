import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarComponents } from "./components";
import { Home, Sukses } from "./pages";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponents />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sukses" element={<Sukses />} />
          </Routes>
        </main>
      </Router>
    );
  }
}
