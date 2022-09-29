import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Homepage from "./Homepage";
import Login from "./login";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  );
}
export default Allroutes;
