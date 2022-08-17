import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Footer from "../containers/Footer/Footer";
import Header from "../containers/Header/Header";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/product/:id" element={<ProductDetails />}></Route>
        <Route path="/sale" element={<Home />}></Route>
        <Route path="/pages" element={<Home />}></Route>
        <Route path="/blog" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
