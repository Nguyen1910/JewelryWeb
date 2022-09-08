import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import apiClient from "../../../../api/ApiConfig";
import { convertPrice } from "../../../../ultis/convertPrice";
import { convertStatus } from "../../../../ultis/convertStatus";

import "./deliveryManager.css";

const Index = () => {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const [deliveryOrder, setDeliveryOrder] = useState([]);
  const [user, setUser] = useState({});
  const [status, setStatus] = useState([]);
  const [render, setRender] = useState(true);

  useEffect(() => {
    const getDeliveryOrder = async () => {
      try {
        const response = await apiClient.get(
          `/delivery/order/${currentUser.id}`
        );
        setDeliveryOrder([...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getDeliveryOrder();
  }, [render]);

  useEffect(() => {
    const getStatus = async () => {
      try {
        const response = await apiClient.get(`/allCode/STATUS`);
        setStatus([...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getStatus();
  }, []);

  const handleOnChangeStatus = async (e, orderId) => {
    try {
      const response = await apiClient.put(`/order/${orderId}`, {
        allCodeId: e.target.value,
      });
      setRender(!render);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetUser = async (userId) => {
    try {
      const response = await apiClient.get(`/user/${userId}`);
      if (response && response.data) {
        setUser({ ...response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignment = async () => {};
  return (
    <div className="container">
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        DELIVERY MANAGER
      </h2>
      <div className="row border-bottom pb-2 mb-3">
        <div className="col-lg-1 cart_col">ID</div>
        <div className="col-lg-2 cart_col">TOTAL</div>
        <div className="col-lg-1 cart_col">USER</div>
        <div className="col-lg-2 cart_col">STATUS</div>
        <div className="col-lg-1 cart_col">NAME</div>
        <div className="col-lg-2 cart_col">ADDRESS</div>
        <div className="col-lg-1 cart_col">PHONE</div>
        <div className="col-lg-2 cart_col">DESCRIPTION</div>
      </div>
      {deliveryOrder.length > 0 ? (
        deliveryOrder.map((item, index) => (
          <div className="row border-bottom pb-2 mb-3">
            <div className="col-lg-1 cart_col">{item.id}</div>
            <div className="col-lg-2 cart_col">{convertPrice(item.total)}</div>
            <div className="col-lg-1 cart_col ">
              <div
                className="btn btn-outline-info"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => handleGetUser(item.userId)}
              >
                {item.userId === null ? "-------" : item.userId}
              </div>
            </div>
            <div className="col-lg-2 cart_col">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => handleOnChangeStatus(e, item.id)}
                disabled={item.allCodeId === "STATUS2" ? true : false}
              >
                {status &&
                  status.map((stt, index) => (
                    <option
                      key={index}
                      value={stt.key}
                      selected={item.allCodeId === stt.key ? true : false}
                    >
                      {stt.value}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-lg-1 cart_col">
              {item.name === null ? "--------" : item.name}
            </div>
            <div className="col-lg-2 cart_col">{item.address}</div>
            <div className="col-lg-1 cart_col">
              {item.phone === null ? "--------" : item.phone}
            </div>

            <div className="col-lg-2 cart_col d-flex">{item.description}</div>
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
                      User information
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="d-flex px-3">
                      <label className="mb-2" style={{ width: "100px" }}>
                        Name:
                      </label>
                      <div>{`${user.lastName} ${user.firstName}`}</div>
                    </div>
                    <div className="d-flex px-3">
                      <label className="mb-2" style={{ width: "100px" }}>
                        Address:
                      </label>
                      <div>{user.address}</div>
                    </div>
                    <div className="d-flex px-3">
                      <label className="mb-2" style={{ width: "100px" }}>
                        Phone:
                      </label>
                      <div>{user.phone}</div>
                    </div>
                    <div className="d-flex px-3">
                      <label className="mb-2" style={{ width: "100px" }}>
                        Email:
                      </label>
                      <div>{user.email}</div>
                    </div>
                    <div className="d-flex px-3">
                      <label className="mb-2" style={{ width: "100px" }}>
                        Gender:
                      </label>
                      <div>{user.gender === 0 ? "Male" : "Female"}</div>
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
