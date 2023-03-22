import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import "./CategoryList.scss";
import { Container } from "../../utils/Components";
import loading from "../images/loading.gif";
import { AiOutlineHome } from "react-icons/ai";
import {BsCart3} from 'react-icons/bs'

function CategoryList() {
  const [category, setCategory] = useState(0);
  const [disNon, setDisNon] = useState("none");
  const [disBl, setDisBl] = useState()
  const [apiUrl,setApiUrl] = useState(`/products?offset=0&limit=25`)
  const [data, isLoading] = useFetchData(`/categories/${category}${apiUrl}`);

  return (
    <section className="category-section">
      <Container>
        <div className="category-container">
          <div className="categories">
            <Link onClick={() => {
              setDisNon("none");
              setDisBl("block");
              setCategory('');
              setApiUrl(`?offset=0&limit=4`)
              }}>
              <AiOutlineHome />
            </Link>
            <Link
              className="categories_toggle"
              onClick={() => {
                setCategory(1);
                setDisNon("flex");
                setDisBl("none");
                setApiUrl(`/products?offset=0&limit=25`);
              }}
            >
              <p>Одежда</p>
            </Link>
            <Link
              className="categories_toggle"
              onClick={() => {
                setCategory(2);
                setDisNon("flex");
                setDisBl("none");
                setApiUrl(`/products?offset=0&limit=25`);
              }}
            >
              <p>Часы</p>
            </Link>
            <Link
              className="categories_toggle"
              onClick={() => {
                setCategory(3);
                setDisNon("flex");
                setDisBl("none");
                setApiUrl(`/products?offset=0&limit=25`);
              }}
            >
              <p>Мебель</p>
            </Link>
            <Link
              className="categories_toggle"
              onClick={() => {
                setCategory(4);
                setDisNon("flex");
                setDisBl("none");
                setApiUrl(`/products?offset=0&limit=25`);
              }}
            >
              <p>Обувь</p>
            </Link>
          </div>
          <div className="category-list" style={{ display: disNon }}>
            {!isLoading ? (
              data.map((category) => (
                <Link className="content-box" key={category.id}>
                  <div className="item">
                    <img src={category.images} alt="" />
                    <h3>{category.title}</h3>
                    <div className="price-cart">
                      <strong>${category.price}</strong>
                      <BsCart3/>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <img className="loading" src={loading} alt="loading" />
            )}
          </div>
          <div className="category-info"style={{display: disBl}} >
            <h1>SmTm</h1>
            <div className="categories_set">
              {!isLoading ? (
                data.map((category) => (
                  <Link className="content-box" key={category.id}>
                    <div className="item">
                      <img src={category.image} alt="" />
                      <h3>{category.name}</h3>
                      <div className="price-cart">
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <img className="loading" src={loading} alt="loading" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CategoryList;
