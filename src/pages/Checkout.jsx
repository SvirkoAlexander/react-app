import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Проверка заказа" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Заполните информацию</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Введите свое имя" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Введите свой Email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Номер телефона" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Адрес" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Город" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Индекс" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Страна" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Общее количество : <span>{totalQty} товаров</span>
                </h6>
                <h6>
                  Итого : <span>{totalAmount} р.</span>
                </h6>
                <h6>
                  <span>
                    Доставка :<br />
                    Бесплатная доставка
                  </span>
                  <span>0 р.</span>
                </h6>

                <h4>
								 Итого : <span>{totalAmount} р.</span>
                </h4>
                <button className="auth__btn w-100">Сделать заказ </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
