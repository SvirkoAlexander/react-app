import React, { useState } from "react";

import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/shop.css";


import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {

	const { data: products } = useGetData('products')
	
	
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Скраб для тела") {
      const filteredProducts = products.filter(
        (item) => item.category === "Скраб для тела"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Лучшая цена") {
      const filteredProducts = products.filter(
        (item) => item.category === "Лучшая цена"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "шоколад") {
      const filteredProducts = products.filter(
        (item) => item.category === "шоколад"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "SPA") {
      const filteredProducts = products.filter(
        (item) => item.category === "SPA"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "Популярные") {
      const filteredProducts = products.filter(
        (item) => item.category === "Популярные"
      );

      setProductsData(filteredProducts);
    }
	};
	
	

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchProducts);
  };

  return (
    <Helmet title="Каталог">
      <CommonSection title="Товары LISANA" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Фильтр по категории</option>
                  <option value="Скраб для тела">Шоколад - кокос</option>
                  <option value="Лучшая цена">Лучшая цена</option>           
                  <option value="Популярные">Популярные</option>
                  
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Сортировать по</option>
                  <option value="ascending">По восхождению</option>
                  <option value="descending">По убыванию</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Поиск..."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="catalog__products pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">Введите название продукта продукт!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
