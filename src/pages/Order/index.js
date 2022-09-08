import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import apiClient from "../../api/ApiConfig";
import {
  deleteCart,
  deleteProduct,
  updateCart,
} from "../../store/actions/cartAction";
import { URL_IMG_PRODUCT } from "../../ultis/configURL";
import { convertPrice } from "../../ultis/convertPrice";
import { convertStatus } from "../../ultis/convertStatus";

import "./order.css";

const Index = () => {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const cart = useSelector((state) => state.cartReducer.cartArr);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const req = await apiClient.get(
          `/order/orderByUserId?userId=${currentUser.id}`
        );
        setOrders([...req.data]);
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    };

    getOrder();
  }, []);

  const handleShowDetailOrder = async (id) => {
    try {
      const response = await apiClient.get(`/orderDetail/${id}`);
      setOrderDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {" "}
      <div className="breadcrumb_content my-5" style={{ textAlign: "center" }}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>order</li>
        </ul>
      </div>
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        ORDER
      </h2>
      <div className="row border-bottom pb-2 mb-3">
        <div className="col-lg-1 cart_col">ID</div>
        <div className="col-lg-3 cart_col">TOTAL</div>
        <div className="col-lg-2 cart_col">STATUS</div>
        <div className="col-lg-2 cart_col"></div>
      </div>
      {orders.length > 0 ? (
        orders.map((item, index) => (
          <div className="row border-bottom pb-2 mb-3">
            <div className="col-lg-1 cart_col">{item.id}</div>
            <div className="col-lg-3 cart_col">{convertPrice(item.total)}</div>
            <div className="col-lg-2 cart_col">
              {convertStatus(item.allCodeId)}
            </div>
            <div className="col-lg-2 cart_col d-flex justify-content-end">
              <div
                className="d-flex justify-content-center align-items-center "
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(deleteProduct(item));
                }}
              >
                <div
                  className="me-5 btn btn-outline-info"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => handleShowDetailOrder(item.id)}
                >
                  Detail
                </div>
                <a href={`/order/${item.id}/history`}>
                  <div className="text-info">History</div>
                </a>
              </div>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Order details
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body mx-4">
                      <div className="row border-bottom pb-2 mb-3">
                        <div className="col-lg-3 cart_col">ORDER ID</div>
                        <div className="col-lg-1 cart_col"></div>
                        <div className="col-lg-4 cart_col">PRODUCT ID</div>
                        <div className="col-lg-1 cart_col"></div>
                        <div className="col-lg-3 cart_col">AMOUNT</div>
                      </div>
                      {orderDetail.map((item, index) => (
                        <div
                          key={index}
                          className="row border-bottom pb-2 mb-3"
                        >
                          <div className="col-lg-3 cart_col">
                            {item.orderId}
                          </div>
                          <div className="col-lg-1 cart_col"></div>
                          <div className="col-lg-4 cart_col">
                            {item.productId}
                          </div>
                          <div className="col-lg-1 cart_col"></div>
                          <div className="col-lg-3 cart_col">{item.amount}</div>
                        </div>
                      ))}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>BẠN KHÔNG CÓ ĐƠN HÀNG NÀO</>
      )}
    </div>
  );
};

export default Index;
