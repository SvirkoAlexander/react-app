import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/cart.css";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Корзина">
      <CommonSection title="Корзина товаров" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">В корзине пусто!</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Товар</th>
                      <th>Название</th>
                      <th>Цена</th>
                      <th>Кол</th>
                      <th>Удалить</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Итого :
                  <span className="fs-4 fw-bold">{totalAmount} р.</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Налоги и доставка будут рассчитаны при оформлении заказа.
              </p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/checkout">Заказать</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Продолжить покупки</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price} р.</td>
      <td>{item.quantity}</td>
      <td>
        <span>
          <motion.i
            whileTap={{ scale: 1.2 }}
            onClick={deleteProduct}
            className="ri-delete-bin-6-line"
          ></motion.i>
        </span>
      </td>
    </tr>
  );
};

export default Cart;
