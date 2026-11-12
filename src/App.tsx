import React from "react";

import Main from "./components/Main";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const routes: Record<string, { page: React.ReactNode; footer: boolean }> = {
  "/cv": { page: <CV />, footer: false },
  "/projects": { page: <Projects />, footer: true },
};

const home = { page: <Main />, footer: true };

function App() {
  const path = window.location.pathname.replace(/\/$/, "");
  const { page, footer } = routes[path] ?? home;

  return (
    <div className="wrapper">
      <main>{page}</main>
      {footer && <Footer />}
    </div>
  );
}

export default App;
