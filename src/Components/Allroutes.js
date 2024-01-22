import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Develop from "./Develop";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import Mdc from "./Mdc";

const Allroutes = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="">
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/develop" element={<Develop />}></Route>
          <Route path="/search" element={<SearchBar />}></Route>
          <Route path="/mdc" element={<Mdc />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Allroutes;
