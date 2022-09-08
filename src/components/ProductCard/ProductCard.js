import React, { useState, memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { URL_IMG_PRODUCT } from "../../ultis/configURL";
import { convertPrice } from "../../ultis/convertPrice";
import { buyProduct } from "../../store/actions/cartAction";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // console.log(useSelector((state) => state.cartReducer.cartArr));
  return (
    <>
      <div className="product_thumb">
        <div className="w-100 bg-image">
          <a href={`shop/product/${product.id}`}>
            <img
              onError={(e) => {
                e.target.classList.add("d-none");
              }}
              className="primary_img w-100"
              src={`${URL_IMG_PRODUCT}${product.id}/${0}`}
              alt="consectetur"
              style={{ objectFit: "cover" }}
            />
          </a>
        </div>
        <div className="product_action">
          <ul>
            <li className="wishlist">
              <a
                href="#"
                data-tippy="Wishlist"
                data-tippy-inertia="true"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-placement="left"
              >
                <i className="fa-regular fa-heart"></i>
              </a>
            </li>

            <li className="quick_view">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target={`#quickViewProduct${product.id}`}
              >
                <i className="fa-solid fa-expand"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="product_content text-center d-flex flex-column">
          <div className="product_ratting">
            <ul className="d-flex justify-content-center">
              <li>
                <a href="#">
                  <i className="ion-android-star"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-android-star"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-android-star"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-android-star"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-android-star"></i>
                </a>
              </li>
              <li>
                <span>(4)</span>
              </li>
            </ul>
          </div>
          <h4 className="product_name px-2">
            <a href={`shop/product/${product.id}`}>{product.name}</a>
          </h4>
          <div className="price_box">
            <span className="current_price">{convertPrice(product.price)}</span>
            {/* <span className="old_price">$62.00</span> */}
          </div>
          <div
            className="add_to_cart"
            onClick={() => dispatch(buyProduct({ ...product, quantity: 1 }))}
          >
            <div
              className="btn btn-primary"
              href="#"
              data-tippy="Add To Cart"
              data-tippy-inertia="true"
              data-tippy-delay="50"
              data-tippy-arrow="true"
              data-tippy-placement="top"
            >
              Add To Cart
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`quickViewProduct${product.id}`}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductCard);
