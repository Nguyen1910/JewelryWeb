import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Footer from "../containers/Footer/Footer";
import Header from "../containers/Header/Header";
import HeaderAdmin from "../pages/Admin/components/Header";
import HeaderStaff from "../pages/Staff/components/Header";
import ProductManager from "../pages/Admin/pages/ProductManager";
import OrderManager from "../pages/Admin/pages/OrderManager";
import DeliveryManager from "../pages/Staff/pages/DeliveryManager";
import CreateProduct from "../pages/Admin/pages/CreateProduct";
import EditProduct from "../pages/Admin/pages/EditProduct";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import OrderHistory from "../pages/OrderHistory";
import Checkout from "../pages/Checkout";
import Success from "../pages/Checkout/components/Success";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  // console.log(currentUser.allCodeId === "ROLE0");
  return (
    <BrowserRouter>
      {Object.keys(currentUser).length === 0 ? (
        <>
          <Header />
          <Routes>
            <Route path="/signIn" element={<SignIn />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="/shop/product/:id"
              element={<ProductDetails />}
            ></Route>
            <Route path="/sale" element={<Home />}></Route>
            <Route path="/pages" element={<Home />}></Route>
            <Route path="/blog" element={<Home />}></Route>
            <Route path="/checkout/success" element={<Success />}></Route>

            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </>
      ) : (
        <>
          {currentUser.allCodeId === "ROLE0" && (
            <>
              <HeaderAdmin />
              <Routes>
                <Route
                  path="/admin/product"
                  element={<ProductManager />}
                ></Route>
                <Route
                  path="/admin/product/createProduct"
                  element={<CreateProduct />}
                ></Route>
                <Route
                  path="/admin/product/:id"
                  element={<EditProduct />}
                ></Route>
                <Route
                  path="/admin/order/:id/assignment"
                  element={<EditProduct />}
                ></Route>
                <Route path="/admin/order" element={<OrderManager />}></Route>
                <Route path="*" element={<Navigate to="/admin/order" />} />
              </Routes>
              {/* <Route path="/order" element={<Order />}></Route>
                <Route
                  path="/order/:id/history"
                  element={<OrderHistory />}
                ></Route> */}
            </>
          )}
          {currentUser.allCodeId === "ROLE1" && (
            <>
              <HeaderStaff />
              <Routes>
                <Route
                  path="/staff/order"
                  element={<DeliveryManager />}
                ></Route>
                <Route path="*" element={<Navigate to="/staff/order" />} />
              </Routes>
            </>
          )}
          {currentUser.allCodeId === "ROLE2" && (
            <>
              <Header />
              <Routes>
                <Route path="/order" element={<Order />}></Route>
                <Route
                  path="/order/:id/history"
                  element={<OrderHistory />}
                ></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route
                  path="/shop/product/:id"
                  element={<ProductDetails />}
                ></Route>
                <Route path="/sale" element={<Home />}></Route>
                <Route path="/pages" element={<Home />}></Route>
                <Route path="/blog" element={<Home />}></Route>
                <Route path="/checkout/success" element={<Success />}></Route>

                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </>
          )}
        </>
      )}
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
