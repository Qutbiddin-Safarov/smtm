import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import "./CategoryList.scss";
import { Container } from "../../utils/Components";
import loading from "../images/loading.gif";
import { AiOutlineHome } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

function CategoryList() {
  const [category, setCategory] = useState(0);
  const [disNon, setDisNon] = useState("none");
  const [disBl, setDisBl] = useState();
  const [apiUrl, setApiUrl] = useState("?offset=0&limit=3");
  const [data, isLoading] = useFetchData(`/categories/${category}${apiUrl}`);

  return (
    <section className="category-section">
      <Container>
        <div className="category-container">
          <div className="categories">
            <Link
              className="home-btn"
              onClick={() => {
                setDisNon("none");
                setDisBl("block");
                setCategory("");
                setApiUrl(`?offset=0&limit=3`);
              }}
            >
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
              <MdArrowForwardIos />
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
              <MdArrowForwardIos />
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
              <MdArrowForwardIos />
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
              <MdArrowForwardIos />
            </Link>
            <Link
              className="categories_toggle"
              onClick={() => {
                setCategory(5);
                setDisNon("flex");
                setDisBl("none");
                setApiUrl(`/products?offset=0&limit=25`);
              }}
            >
              <p>Разное</p>
              <MdArrowForwardIos />
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
                      <BsCart3 />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <img className="loading" src={loading} alt="loading" />
            )}
          </div>
          <div className="category-info" style={{ display: disBl }}>
              <h1 className="site-h1">
                SmTm - запчасти для телефонов, ноутбуков и планшетов с доставкой
                по Узбекистану
              </h1>
              <span className="line"></span>
            <p className="info-text">
              С легкостью обновите свою технику в нашем магазине запчастей SmTm.
              Мы предлагаем широкий выбор высококачественных запчастей для всех
              ваших цифровых устройств, от ноутбуков до смартфонов и игровых
              консолей. Наш простой в использовании веб-сайт упрощает поиск
              нужной детали, а наши конкурентоспособные цены и надежные варианты
              доставки экономят ваше время и деньги. Доверьте нашей команде
              технических экспертов помощь в получении максимальной отдачи от
              ваших устройств с нашими первоклассными комплектующими. Посетите
              нас сегодня в магазине Web Tech Parts Store и поднимите свои
              технологии на новый уровень!
            </p>
            <div className="popular-categories">
              Популярные категории <BiCategory className="category_icon" />
            </div>
            <div className="categories_set">
              {!isLoading ? (
                data.map((category_set) => (
                  <Link className="content-box" key={category_set.id}>
                    <div className="item">
                      <img src={category_set.image} alt="" />
                      <h3>{category_set.name}</h3>
                      <div className="price-cart"></div>
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
