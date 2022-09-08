import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removeUser } from "../../../../store/actions/auth";
import { deleteProduct } from "../../../../store/actions/cartAction";
import { URL_IMG_PRODUCT } from "../../../../ultis/configURL";
import { convertPrice } from "../../../../ultis/convertPrice";
import { totalCart } from "../../../../ultis/totalCart";
import "./Header.css";

const MENU_LIST = [{ title: "DELIVERY MANAGER", linkTo: "/staff/order" }];

function Header(props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cartArr);
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const dispatch = useDispatch();
  const headerRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        ref={headerRef}
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
                      {Object.keys(currentUser).length !== 0 ? (
                        <>
                          <li>
                            <a className="dropdown-item" href="#">
                              My account
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={() => {
                                dispatch(removeUser());
                                navigate("/signIn");
                              }}
                            >
                              Log out
                            </a>
                          </li>
                        </>
                      ) : (
                        <li>
                          <Link className="dropdown-item" to="/signIn">
                            Login
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
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
                <span className="price">{totalCart(cart)}</span>
              </div>
              <div className="cart_total mt-10 d-flex justify-content-between">
                <span>total:</span>
                <span className="price">{totalCart(cart)}</span>
              </div>
            </div>
          </div>
          <div className="mini_cart_footer">
            <div className="cart_button">
              <a href="/cart">
                <i className="fa fa-shopping-cart"></i> View cart
              </a>
            </div>
            <div className="cart_button">
              <a href="/checkout">
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
