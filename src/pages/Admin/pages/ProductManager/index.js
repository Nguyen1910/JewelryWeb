import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import apiClient from "../../../../api/ApiConfig";
import {
  deleteCart,
  deleteProduct,
  updateCart,
} from "../../../../store/actions/cartAction";
import { URL_IMG_PRODUCT } from "../../../../ultis/configURL";
import { convertPrice } from "../../../../ultis/convertPrice";
import { convertStatus } from "../../../../ultis/convertStatus";

import "./productManager.css";

const Index = () => {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const cart = useSelector((state) => state.cartReducer.cartArr);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const req = await apiClient.get(`/product`);
        setProducts([...req.data.data]);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProduct();
  }, []);
  return (
    <div className="container">
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        Product Manager
      </h2>
      <div className="row border-bottom pb-2 mb-3">
        <div className="cart_col" style={{ width: "50px" }}>
          ID
        </div>
        <div className="col-lg-2 cart_col">NAME</div>
        <div className="col-lg-1 cart_col">PRICE</div>
        <div className="col-lg-3 cart_col">DESCRIPTION</div>
        <div className="col-lg-1 cart_col">MATERIAL</div>
        <div className="col-lg-1 cart_col">GENDER</div>
        <div className="col-lg-1 cart_col">AMOUNT</div>
        <div className="col-lg-1 cart_col">COLOR</div>
        <div className="col-lg-1 cart_col">
          {" "}
          <a href={`/admin/product/createProduct`}>
            <div className="text-info">
              <i className="fa-solid fa-plus me-2"></i>New
            </div>
          </a>
        </div>
      </div>
      {products.length > 0 &&
        products.map((item, index) => (
          <div className="row border-bottom pb-2 mb-3">
            <div className="cart_col" style={{ width: "50px" }}>
              {item.id}
            </div>
            <div className="col-lg-2 cart_col">{item.name}</div>
            <div className="col-lg-1 cart_col">{convertPrice(item.price)}</div>
            <div className="col-lg-3 cart_col">
              {item.description.length > 65
                ? `${item.description.slice(0, 70)}...`
                : item.description}
            </div>
            <div className="col-lg-1 cart_col">{item.material}</div>
            <div className="col-lg-1 cart_col">
              {item.gender === 0 ? `Nam` : `Nữ`}
            </div>
            <div className="col-lg-1 cart_col">{item.amount}</div>
            <div className="col-lg-1 cart_col">{item.color}</div>
            <div className="col-lg-1 cart_col d-flex justify-content-end">
              <div
                className="d-flex justify-content-center align-items-center "
                style={{ cursor: "pointer" }}
              >
                <a href={`/admin/product/${item.id}`}>
                  <div className="me-3 text-info">Edit</div>
                </a>
                <a href={`/order/${item.id}/history`}>
                  <div className="text-info">Delete</div>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Index;
