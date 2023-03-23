import React from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { RxEnter } from "react-icons/rx";
import { AiOutlinePlusSquare, AiFillPhone } from "react-icons/ai";
import { Container } from "../../utils/Components";

const Header = () => {
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
    </header>
  );
}

export default Header;
