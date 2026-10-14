import React from "react";

import Main from "./components/Main";
import CV from "./components/CV";
import Footer from "./components/Footer";

function App() {
  const isCV = window.location.pathname.replace(/\/$/, "") === "/cv";

  return (
    <div className="wrapper">
      <main>{isCV ? <CV /> : <Main />}</main>
      {!isCV && <Footer />}
    </div>
  );
}

export default App;
