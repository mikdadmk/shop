import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TypesExample from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/homepage/home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TypesExample />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
