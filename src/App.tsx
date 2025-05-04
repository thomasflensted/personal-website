import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/about" element={<Main />}></Route>
            <Route path="/" element={<Portfolio />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
