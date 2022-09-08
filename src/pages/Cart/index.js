import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCart,
  deleteProduct,
  updateCart,
} from "../../store/actions/cartAction";
import { URL_IMG_PRODUCT } from "../../ultis/configURL";
import { convertPrice } from "../../ultis/convertPrice";

import "./cart.css";

const Index = () => {
  const cart = useSelector((state) => state.cartReducer.cartArr);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {" "}
      <div className="breadcrumb_content my-5" style={{ textAlign: "center" }}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>shop</li>
        </ul>
      </div>
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        SHOPPING CART
      </h2>
      <div className="row border-bottom pb-2 mb-3">
        <div className="col-lg-1 cart_col">PRODUCT</div>
        <div className="col-lg-5 cart_col">INFORMATION</div>
        <div className="col-lg-2 cart_col">PRICE</div>
        <div className="col-lg-2 cart_col">QUANTITY</div>
        <div className="col-lg-1 cart_col">TOTAL</div>
        <div className="col-lg-1 cart_col"></div>
      </div>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div className="row border-bottom pb-2 mb-3">
            <div className="col-lg-1 cart_col">
              <img
                src={`${URL_IMG_PRODUCT}${item.id}/${0}`}
                className="w-100"
                style={{}}
              />
            </div>
            <div className="col-lg-5 cart_col">{item.name}</div>
            <div className="col-lg-2 cart_col">{convertPrice(item.price)}</div>
            <div className="col-lg-2 cart_col px-2">
              <div className="cart-qty d-flex align-items-center justify-content-center w-50">
                <div
                  className="btn-qty"
                  // onClick={() => setQuantity(quantity - 1)}
                >
                  <i className="fa-solid fa-minus"></i>
                </div>
                <input
                  min="1"
                  max="100"
                  type="number"
                  // className="w-100"
                  value={item.quantity}
                  onChange={(e) => {
                    // dispatch(updateCart([...cart, ]))
                  }}
                />
                <div
                  className="btn-qty"
                  // onClick={() => setQuantity(quantity + 1)}
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-1 cart_col">
              {convertPrice(parseInt(item.price) * item.quantity)}
            </div>
            <div className="col-lg-1 cart_col d-flex justify-content-end">
              <div
                className="border rounded-circle d-flex justify-content-center align-items-center "
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                onClick={() => {
                  dispatch(deleteProduct(item));
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ</>
      )}
      <div className="d-flex justify-content-between mt-4">
        <div className="">
          <button
            className="btn btn-outline-success me-5"
            onClick={() => dispatch(deleteCart())}
          >
            CLEAR SHOPPING CART
          </button>
          <a href="/shop">
            {" "}
            <button className="btn btn-outline-success">
              CONTINUE SHOPPING
            </button>
          </a>
        </div>
        {cart.length > 0 ? (
          <a href="/checkout">
            <button className="btn btn-outline-success">
              PROCEED TO CHECKOUT
            </button>
          </a>
        ) : (
          <button className="btn btn-outline-success" disabled>
            PROCEED TO CHECKOUT
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
