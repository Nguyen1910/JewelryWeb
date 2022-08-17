import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_widgets">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="footer_widget_list">
              <div className="footer_logo">
                <a href="#">
                  <img src="media/logo/logo.png" alt="" className="h-100" />
                </a>
              </div>
              <div className="footer_contact">
                <div className="footer_contact_list">
                  <span>Our Location</span>
                  <p>869 General Village Apt. 645, Moorebury, USA</p>
                </div>
                <div className="footer_contact_list">
                  <span>24/7 hotline:</span>
                  <a href="tel:(+99)0521282399">(+99) 052 128 2399</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7">
            <div className="footer_widget_list text-right">
              <div className="footer_menu">
                <ul className="d-flex justify-content-end">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="product-details.html">Product</a>
                  </li>
                  <li>
                    <a href="#">pages</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="footer_social">
                <ul className="d-flex justify-content-end">
                  <li>
                    <a
                      href="https://twitter.com"
                      data-tippy="Twitter"
                      data-tippy-inertia="true"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-placement="top"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      data-tippy="Facebook"
                      data-tippy-inertia="true"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-placement="top"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com"
                      data-tippy="googleplus"
                      data-tippy-inertia="true"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-placement="top"
                    >
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      data-tippy="Instagram"
                      data-tippy-inertia="true"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-placement="top"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com"
                      data-tippy="Youtube"
                      data-tippy-inertia="true"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-placement="top"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright_right d-flex justify-content-end">
                <p>
                  ©2021 <span>Uthr</span>. made with{" "}
                  <i className="ion-heart"></i> by{" "}
                  <a href="https://hasthemes.com" target="_blank">
                    HasThemes
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
