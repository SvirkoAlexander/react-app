import React, { useEffect, useRef } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo3.png";
import userIcon from "../../assets/images/user-icon.png";

import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import useAuth from "../../custom-hooks/useAuth";
import { auth } from "../../firebase.config";

const nav__links = [
  {
    path: "home",
    display: "Главная",
  },
  {
    path: "shop",
    display: "Каталог",
  },
  {
    path: "cart",
    display: "Корзина",
	},	
	
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Вы вышли из аккаунта ✌🏻");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
	};
	
	
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profile");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1 className="nav__name">Lisana</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons" >
							<p>+375 29 555-55-55</p>
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="usericon"
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Выход</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
												<Link to="/login">Login</Link>
												<Link to="/dashboard">Dashboard</Link>
                    </div>
                  )}
                </div>
              </div>
							<div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
