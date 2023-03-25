import React from "react";
import { Link } from "react-router-dom";
import "./Store.scss";
import { Container } from "../../utils/Components";

const Store = () => {
  return (
    <section>
      <Container>
            <Link to="/some/store">Store</Link>
            <Link to="/some/1">Product 1</Link>
      </Container>
    </section>
  );
};

export default Store;
