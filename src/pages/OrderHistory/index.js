import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import apiClient from "../../api/ApiConfig";
import {
  deleteCart,
  deleteProduct,
  updateCart,
} from "../../store/actions/cartAction";
import { URL_IMG_PRODUCT } from "../../ultis/configURL";
import { convertPrice } from "../../ultis/convertPrice";
import { convertStatus } from "../../ultis/convertStatus";

import "./orderHistory.css";

const Index = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getOrderById = async () => {
      try {
        const req = await apiClient.get(`/order/${id}}`);
        setOrder({ ...req.data });
      } catch (error) {
        console.log(error);
      }
    };

    getOrderById();
  }, []);
  return (
    <div className="container">
      <div className="breadcrumb_content my-5" style={{ textAlign: "center" }}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>order history</li>
        </ul>
      </div>
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        ORDER HISTORY
      </h2>
      <div className="row pb-2 mb-3">
        <div className="d-flex justify-content-center">
          {order.allCodeId === "STATUS0" && (
            <div className="d-flex ">
              <div className="transport active">
                <i className="fa-solid fa-receipt"></i>
                <span>Đang xử lý</span>
              </div>

              <div className="transport">
                <i className="fa-solid fa-truck"></i>
                <span>Đang giao</span>
              </div>
              <div className="transport">
                <i className="fa-solid fa-inbox"></i>
                <span>Giao thành công</span>
              </div>
            </div>
          )}
          {order.allCodeId === "STATUS1" && (
            <div className="d-flex">
              <div className="transport active">
                <i className="fa-solid fa-receipt"></i>
                <span>Đang xử lý</span>
              </div>

              <div className="transport active">
                <i className="fa-solid fa-truck"></i>
                <span>Đang giao</span>
              </div>
              <div className="transport">
                <i className="fa-solid fa-inbox"></i>
                <span>Giao thành công</span>
              </div>
            </div>
          )}
          {order.allCodeId === "STATUS2" && (
            <div className="d-flex">
              <div className="transport active">
                <i className="fa-solid fa-receipt"></i>
                <span>Đang xử lý</span>
              </div>

              <div className="transport">
                <i className="fa-solid fa-truck active"></i>
                <span>Đang giao</span>
              </div>
              <div className="transport">
                <i className="fa-solid fa-inbox active"></i>
                <span>Giao thành công</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
