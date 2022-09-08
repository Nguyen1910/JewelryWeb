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

import "./orderManager.css";

const Index = () => {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const cart = useSelector((state) => state.cartReducer.cartArr);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [delivery, setDelivery] = useState({
    staffId: "",
    description: "",
    orderId: "",
  });
  useEffect(() => {
    const getOrder = async () => {
      try {
        const req = await apiClient.get(`/order`);
        const newOrder = req.data.data;
        for (const item of newOrder) {
          if (item.deliveryId) {
            const { data } = await apiClient.get(
              `/delivery/${item.deliveryId}`
            );
            if (data && data.userId) {
              const resUser = await apiClient.get(`/user/${data.userId}`);
              // console.log(resUser);
              item.staffName = `${resUser.data.lastName} ${resUser.data.firstName}`;
            }
          }
        }
        // console.log(newOrder);
        setOrders([...newOrder]);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, [delivery]);

  useEffect(() => {
    const getStaff = async () => {
      try {
        const response = await apiClient.get("/user/staff");
        if (response && response.data) {
          setStaffs([...response.data]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getStaff();
  }, []);

  const handleShowDetailOrder = async (id) => {
    try {
      const response = await apiClient.get(`/orderDetail/${id}`);
      setOrderDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteOrder = async (id) => {
    try {
      const res = await apiClient.delete(`/order/${id}`);
      alert("Đơn hàng đã hủy");
    } catch (error) {
      alert("Hủy đơn hàng thất bại");
    }
  };

  const handleAssignment = async () => {
    try {
      const response = await apiClient.post("/delivery", {
        userId: delivery.staffId,
        description: delivery.description,
      });
      if (response && response.data) {
        const resOrder = await apiClient.put(`/order/${delivery.orderId}`, {
          deliveryId: response.data.id,
        });
        // console.log(resOrder);
      }
      setDelivery({ staffId: "", description: "", orderId: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        ORDER MANAGER
      </h2>
      <div className="row border-bottom pb-2 mb-3">
        <div className="col-lg-1 cart_col">ID</div>
        <div className="col-lg-3 cart_col">TOTAL</div>
        <div className="col-lg-2 cart_col">STATUS</div>
        <div className="col-lg-2 cart_col">DELIVERY</div>
        <div className="col-lg-4 cart_col"></div>
      </div>
      {orders.length > 0 ? (
        orders.map((item, index) => (
          <div className="row border-bottom pb-2 mb-3">
            <div className="col-lg-1 cart_col">{item.id}</div>
            <div className="col-lg-3 cart_col">{convertPrice(item.total)}</div>
            <div className="col-lg-2 cart_col">
              {convertStatus(item.allCodeId)}
            </div>
            <div className="col-lg-2 cart_col">
              <div
                className="btn btn-outline-info"
                data-bs-toggle="modal"
                data-bs-target="#modalDelivery"
                onClick={() => setDelivery({ ...delivery, orderId: item.id })}
              >
                {item.deliveryId === null ? "Chưa giao" : item.staffName}
              </div>
            </div>

            <div className="col-lg-4 cart_col d-flex">
              <div className="d-flex justify-content-center align-items-center ">
                <div
                  className="me-5 btn btn-outline-info"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => handleShowDetailOrder(item.id)}
                >
                  Detail
                </div>
                <a href={`/order/${item.id}/history`}>
                  <div
                    className="text-info me-5"
                    onClick={() => handleDeleteOrder(item.id)}
                  >
                    Cancel order
                  </div>
                </a>
              </div>
            </div>
            <div
              className="modal fade"
              id="modalDelivery"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Delivery assignment
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        setDelivery({ ...delivery, staffId: e.target.value })
                      }
                    >
                      <option selected disabled>
                        Open this select staff
                      </option>
                      {staffs &&
                        staffs.map((item) => (
                          <option
                            selected={
                              item.id === delivery.staffId ? true : false
                            }
                            key={item.id}
                            value={item.id}
                          >
                            {`${item.lastName} ${item.firstName}`}
                          </option>
                        ))}
                    </select>
                    <div className="form-floating mt-4">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                        value={delivery.description}
                        onChange={(e) =>
                          setDelivery({
                            ...delivery,
                            description: e.target.value,
                          })
                        }
                        style={{ resize: "none", height: "100px" }}
                      ></textarea>
                      <label for="floatingTextarea" className="">
                        Description
                      </label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleAssignment}
                    >
                      Assignment
                    </button>
                  </div>
                </div>
              </div>
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
                      <div key={index} className="row border-bottom pb-2 mb-3">
                        <div className="col-lg-3 cart_col">{item.id}</div>
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
        ))
      ) : (
        <>KHÔNG CÓ ĐƠN HÀNG NÀO</>
      )}
    </div>
  );
};

export default Index;
