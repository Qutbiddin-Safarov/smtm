import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Auth from "./auth/Auth";
import Home from "./home/Home";

function AllRoutes() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </>
  );
}

export default AllRoutes;
