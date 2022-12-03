import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img3.jpg";
import counterImg from "../assets/images/skrabcount.png";
import Helmet from "../components/Helmet/Helmet";
import Clock from "../components/UI/Clock";
import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";
import Services from "../services/Services";
import "../styles/home.css";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "Скраб для тела"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "Лучшая цена"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "Популярные"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={"Главная"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Лучший продукт в {year} году</p>
                <h2>Lisana cosmetics</h2>
                <p>
                  Lisana cosmetics for your body - подарите своей коже
                  незабываемый уход и наслаждение с косметикой из натуральных
                  масел.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Купить Сейчас</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="heroimg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title ">Популярный товар</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Лучшая цена</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-black fs-6 mb-2">
                  Ограниченное предложение
                </h4>
                <h3 className="text-black fs-4 mb-4">Получите скидку 25%</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn mt-4"
              >
                <Link to="/shop">Перейти в каталог</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="counter__img text-end ">
              <img src={counterImg} alt="counterimg" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Популярные в категории</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
