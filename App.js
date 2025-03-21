import React from "react";
import { Routes, Route } from "react-router-dom"; // ❌ Don't import BrowserRouter here
import Login from "./Login"; 
import Home from "./Home"; 
import Registration from "./Registration"; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default App;
