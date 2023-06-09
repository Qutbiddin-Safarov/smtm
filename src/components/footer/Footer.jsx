import React from "react";
import { Container } from "../../utils/Components";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <p>
          Информация, указанная на сайте, не является публичной офертой.
          Информация о товарах, их технических свойствах и характеристиках,
          ценах является предложением SmTM делать оферты. Акцептом SmTM
          полученной оферты является подтверждение заказа с указанием товара и
          его цены. Сообщение SmTM о цене заказанного товара, отличающейся от
          указанной в оферте, является отказом SmTM от акцепта и одновременно
          офертой со стороны SmTM. Информация о технических характеристиках
          товаров, указанная на сайте, может быть изменена производителем в
          одностороннем порядке. Изображения товаров на фотографиях,
          представленных в каталоге на сайте, могут отличаться от оригиналов.
          Информация о цене товара, указанная в каталоге на сайте, может
          отличаться от фактической к моменту оформления заказа на
          соответствующий товар. Подтверждением цены заказанного товара является
          сообщение SmTM о цене такого товара. © 2023 Интернет-магазин SmTM
        </p>
      </Container>
    </section>
  );
};

export default Footer;
