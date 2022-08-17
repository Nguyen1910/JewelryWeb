import React from "react";
import { Link } from "react-router-dom";
import TextInput from "../../../components/TextInput";

import "./SignIn.css";

const Index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="w-400px mx-3 mx-auto">
          <h3 className="d-flex justify-content-center my-5">Login</h3>
          <TextInput
            label="Email"
            labelStyle={{ minWidth: "80px" }}
            type="email"
            className="mb-3"
          />
          <TextInput
            label="Password"
            labelStyle={{ minWidth: "80px" }}
            type="password"
            className="mb-3"
          />
          <div className="d-flex justify-content-end mb-3">
            <div>Quên mật khẩu?</div>
          </div>
          <div className="btn btn-danger w-100 mb-3">Đăng nhập</div>
          <div>
            Bạn chưa có tài khoản?{" "}
            <Link to="/signUp" className="text-danger">
              Đăng ký
            </Link>{" "}
            tài khoản ngay
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
