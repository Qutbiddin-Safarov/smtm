import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import SearchProd from "../routes/search/Search";
import Auth from "./auth/Auth";
import Home from "./home/Home";
import SingleProduct from "./product/SingleProduct";

function AllRoutes() {
  return (
    <>
      <Header/>
      <Search/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/search" element={<SearchProd/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes>
    </>
  );
}

export default AllRoutes;
