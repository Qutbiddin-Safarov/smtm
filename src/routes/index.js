import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import SearchProd from "../routes/search/Search";
import Auth from "./auth/Auth";
import Home from "./home/Home";
import SingleProduct from "./product/SingleProduct";
import Footer from "../components/footer/Footer"
import StoreInfo from "../components/store/store-info/StoreInfo"
import Products from "../components/store/products/Products";

function AllRoutes() {
  return (
    <>
      <Header/>
      <Search/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route>
          <Route path="/store/store" element={<StoreInfo/>}/>
          <Route path="/store/:id" element={<Products/>}/>
        </Route>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/search/:productTitle" element={<SearchProd/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default AllRoutes;
