import React from 'react';
import {BsCart3} from 'react-icons/bs';
import { Container } from "../../utils/Components";
import {FcElectronics , FcSearch} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Search.scss'

function Search() {
  return (
    <section className="header-search">
    <Container>
      <nav className="search-nav">
        <ul className="search-list">
          <li className="search-item">
            <Link to="/" className='home-link'>
            <div className="logo-content">
              <FcElectronics className="logo" />
              <div className="logo-text">
                <h2>SmTm</h2>
                <p>интернет магазин</p>
              </div>
            </div>
            </Link>
          </li>
          <li className="search-item_search">
            <form action="" className='search_form'>
                <input placeholder="Search ..." type="text" className="search-input"/>
                <button typy="submit" className='search-button'>
                    <FcSearch className='search-icon' />
                </button>
            </form>
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
  )
}

export default Search