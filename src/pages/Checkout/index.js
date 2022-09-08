import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { URL_IMG_PRODUCT } from "../../ultis/configURL";
import { convertPrice } from "../../ultis/convertPrice";
import TextInput from "../../components/TextInput";

import "./checkout.css";
import { totalCart } from "../../ultis/totalCart";
import apiClient from "../../api/ApiConfig";
import { deleteCart, updateCart } from "../../store/actions/cartAction";

const Index = () => {
  const cart = useSelector((state) => state.cartReducer.cartArr);
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  console.log(Object.keys(currentUser).length);
  const [order, setOrder] = useState({
    allCodeId: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    address: null,
    total: null,
    userId: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    try {
      if (cart) {
        if (Object.keys(currentUser).length > 0) {
          console.log({
            allCodeId: "STATUS0",
            address: order.address,
            userId: currentUser.id,
            total: cart.reduce(
              (total, item) => total + item.price * item.quantity
            ),
          });
          const addOrder = await apiClient.post("/order", {
            allCodeId: "STATUS0",
            address: order.address,
            userId: currentUser.id,
            total: cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ),
          });
          cart.forEach(async (item) => {
            const addOrderDetail = await apiClient.post("/orderDetail", {
              productId: item.id,
              orderId: addOrder.data.id,
              amount: item.quantity,
            });
          });
          dispatch(deleteCart());
          navigate("/checkout/success");
        } else {
          const addOrder = await apiClient.post("/order", {
            allCodeId: "STATUS0",
            firstName: order.firstName,
            lastName: order.lastName,
            address: order.address,
            phone: order.phone,
            total: cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            ),
          });
          cart.forEach(async (item) => {
            const addOrderDetail = await apiClient.post("/orderDetail", {
              productId: item.id,
              orderId: addOrder.data.id,
              amount: item.quantity,
            });
          });
          dispatch(deleteCart());
          navigate("/checkout/success");
        }
      }
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
          <li>checkout</li>
        </ul>
      </div>
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        CHECKOUT
      </h2>
      <div className="row ">
        <div className="col-lg-7 pe-5">
          <h3 className="mb-5">Billing Details</h3>
          {Object.keys(currentUser).length === 0 && (
            <>
              <TextInput
                className="mb-4"
                label="First name"
                type="text"
                labelStyle={{ width: "150px" }}
                name="firstName"
                onChange={onChange}
                value={order.firstName}
              />
              <TextInput
                className="mb-4"
                label="Last name"
                type="text"
                labelStyle={{ width: "150px" }}
                name="lastName"
                onChange={onChange}
                value={order.lastName}
              />
              <TextInput
                className="mb-4"
                label="Phone"
                type="text"
                labelStyle={{ width: "150px" }}
                name="phone"
                onChange={onChange}
                value={order.phone}
              />
            </>
          )}
          <TextInput
            className="mb-4"
            label="Address"
            type="text"
            labelStyle={{ width: "150px" }}
            name="address"
            value={order.address}
            onChange={onChange}
          />
        </div>
        <div className="col-lg-5">
          <h3 className="mb-5">Your Order</h3>
          <div className="order_table table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {" "}
                      {item.name} x {item.quantity}
                    </td>
                    <td className="text-right">
                      {convertPrice(parseInt(item.price) * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Cart Subtotal </td>
                  <td className="text-right">{totalCart(cart)}</td>
                </tr>
                <tr className="order_total">
                  <th>Order Total</th>
                  <td className="text-right">{totalCart(cart)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className=" w-100">
            {cart.length > 0 ? (
              <Link
                className="btn btn-success w-100 py-2"
                to="/checkout/success"
                onClick={handlePlaceOrder}
              >
                PLACE ORDER
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
