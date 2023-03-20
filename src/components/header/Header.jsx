import React from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { RxEnter } from "react-icons/rx";
import { AiOutlinePlusSquare, AiFillPhone } from "react-icons/ai";
import {BsCart3} from 'react-icons/bs'
import {FcElectronics} from 'react-icons/fc'
import { Container } from "../../utils/Components";

function Header() {
    const location = useLocation();
  return location.pathname !== "/auth" && (

    <header>
      <Container>
        <div className="header-panel">
          <nav className="panel-nav">
            <ul className="panel-list">
              <li className="list-item">
                <AiFillPhone />
                <p>+998(99)999-99-99</p>
              </li>
              <li className="list-item">
                <AiFillPhone />
                <p>+998(99)999-99-99</p>
              </li>
              <li className="list-item">
                <Link className="work-time">
                  <p>Режим работы</p>
                </Link>
              </li>
              <li className="list-item">
                <AiOutlinePlusSquare />
                <Link to='/auth' className="auth_links">Sign up</Link>
              </li>
              <li className="list-item">
                <RxEnter />
                <Link to='/auth' className="auth_links">Sign in</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
      <section className="header-search">
        <Container>
          <nav className="search-nav">
            <ul className="search-list">
              <li className="search-item">
                <div className="logo-content">
                  <FcElectronics className="logo" />
                  <div className="logo-text">
                    <h2>SmTm</h2>
                    <p>интернет магазин</p>
                  </div>
                </div>
              </li>
              <li className="search-item">
                <input placeholder="Search ..." type="text" className="search-input"/>
              </li>
              <li className="search-item">
                <Link className="cart">
                    <BsCart3 className="cart-icon"/>
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </section>
    </header>
  );
}

export default Header;
