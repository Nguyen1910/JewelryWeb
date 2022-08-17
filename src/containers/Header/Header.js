import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { deleteProduct } from "../../store/actions/cartAction";
import { URL_IMG_PRODUCT } from "../../ultis/configURL";
import { convertPrice } from "../../ultis/convertPrice";
import "./Header.css";

const MENU_LIST = [
  { title: "HOME", linkTo: "/home" },
  { title: "SHOP", linkTo: "/shop" },
  { title: "SALE", linkTo: "/sale" },
  { title: "PAGES", linkTo: "/pages" },
  { title: "BLOG", linkTo: "/blog" },
];

function Header(props) {
  const { pathname } = useLocation();
  const cart = useSelector((state) => state.cartReducer.cartArr);
  const dispatch = useDispatch();
  return (
    <header className="header-transparent">
      <div className="header_top">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-12 h-100">
              <div className="header_top_inner d-flex justify-content-between align-items-center h-100">
                <div className="header_contact_info h-100 d-flex justify-content-center align-items-center">
                  <div className="d-flex">
                    <div className="text-white">
                      <i className="fa-solid fa-phone me-2"></i>
                      <a
                        href="tel:+05483716566"
                        className="text-decoration-none text-white"
                      >
                        +054 8371 65 66
                      </a>
                    </div>
                    <div className="text-white ms-3">
                      <i className="fa-solid fa-envelope-open-text me-2"></i>
                      <a href="#" className="text-decoration-none text-white">
                        uthrstore@domain.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center">
                  <div className="text-white">
                    Free shipping worldwide for orders over $99{" "}
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="header_top_sidebar d-flex justify-content-center align-items-center h-100">
                  <div className="header_social d-flex justify-content-center align-items-center h-100 text-white">
                    <span>Follow us</span>
                    <ul className="d-flex h-100 ms-3">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-square-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="language_currency">
                    <select
                      className="form-select bg-transparent text-white border-0 border-outline-none h-100 mb-1"
                      aria-label="Default select example"
                    >
                      <option className="text-white" selected>
                        VI
                      </option>
                      <option className="text-white" value="1">
                        ENG
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{ height: "100px" }}
      >
        <div className="container-fluid h-100">
          <Link to="/home" className="h-100" style={{ width: "125px" }}>
            <img src="media/logo/logo.png" alt="" className="h-100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              {MENU_LIST.map((item, index) => (
                <>
                  {item.subMenu ? (
                    <li key={index} className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={item.linkTo}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.title}
                      </Link>
                      <ul className="dropdown-menu">
                        {item.subMenu.map((item, index) => (
                          <li key={index}>
                            <a className="dropdown-item" href={item.linkTo}>
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item mx-3 fw-bold" key={index}>
                      <Link
                        className={`nav-link ${
                          pathname === item.linkTo ? "active" : ""
                        }`}
                        aria-current="page"
                        to={item.linkTo}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )}
                </>
              ))}
            </ul>
            <div>
              <ul
                className="d-flex justify-content-evenly fs-5"
                style={{ width: "175px" }}
              >
                <li>
                  <div class="dropdown">
                    <a
                      href="#"
                      className="text-dark"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-user"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/signIn">
                          Đăng nhập
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Thông tin cá nhân
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="position-relative">
                  <a href="#" className="text-dark">
                    <i className="fa-solid fa-heart"></i>
                  </a>
                  <span
                    className="position-absolute border border-1 border-dark rounded-circle text-white d-flex justify-content-center align-items-center"
                    style={{
                      height: "18px",
                      width: "18px",
                      fontSize: "12px",
                      top: "-20%",
                      right: "-30%",
                      backgroundColor: "#000",
                    }}
                  >
                    2
                  </span>
                </li>
                <li
                  className="position-relative"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <a href="#" className="text-dark">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                  <span
                    className="position-absolute border border-1 border-dark rounded-circle text-white d-flex justify-content-center align-items-center"
                    style={{
                      height: "18px",
                      width: "18px",
                      fontSize: "12px",
                      top: "-20%",
                      right: "-30%",
                      backgroundColor: "#000",
                    }}
                  >
                    {cart && cart.length}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        style={{ zIndex: "10000", width: "355px" }}
      >
        <div className="offcanvas-header mx-2 border-bottom">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close border border-2 rounded-circle border-dark "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart &&
            cart.map((item, index) => (
              <Link to={`/shop/product/${item.id}`} key={index}>
                <div className="cart_item">
                  <div className="cart_img">
                    <a href="#">
                      <img
                        src={`${URL_IMG_PRODUCT}${item.id}/${0}`}
                        alt=""
                        className="w-100"
                      />
                    </a>
                  </div>
                  <div className="cart_info">
                    <a href="#">{item.name}</a>
                    <p>
                      {item.quantity} x{" "}
                      <span> {convertPrice(item.price)} </span>
                    </p>
                  </div>
                  <div
                    className="cart_remove d-flex align-items-start border border-2 rounded-circle justify-content-center"
                    style={{ height: "25px", width: "25px" }}
                  >
                    <a
                      href="#"
                      className=""
                      onClick={(e) => {
                        dispatch(deleteProduct(item));
                        e.preventDefault();
                      }}
                    >
                      <i className="fa-solid fa-xmark "></i>
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          <div className="mini_cart_table">
            <div className="cart_table_border">
              <div className="cart_total d-flex justify-content-between">
                <span>Sub total:</span>
                <span className="price">$125.00</span>
              </div>
              <div className="cart_total mt-10 d-flex justify-content-between">
                <span>total:</span>
                <span className="price">$125.00</span>
              </div>
            </div>
          </div>
          <div className="mini_cart_footer">
            <div className="cart_button">
              <a href="cart.html">
                <i className="fa fa-shopping-cart"></i> View cart
              </a>
            </div>
            <div className="cart_button">
              <a href="checkout.html">
                <i className="fa fa-sign-in"></i> Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
