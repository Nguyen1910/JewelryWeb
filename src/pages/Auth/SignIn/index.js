import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { Link, Navigate } from "react-router-dom";
import apiClient from "../../../api/ApiConfig";
import TextInput from "../../../components/TextInput";

import "./SignIn.css";
import { setUser } from "../../../store/actions/auth";

const Index = () => {
  // console.log("sadas", process.env.PORT);
  console.log(useSelector((state) => state.authReducer.currentUser));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    const queryParams = queryString.stringify(account);
    if (account.email === "" || account.password === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
    } else {
      try {
        const req = await apiClient.post(`/user/login`, account);
        if (req.data) {
          dispatch(setUser(req.data));
          navigate("/home");
        } else {
          alert("Đăng nhập thất bại");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(useSelector((state) => state.authReducer.currentUser));
  return (
    <div className="container">
      <div className="row">
        <div className="w-400px mx-auto shadow-lg rounded mt-5 px-4 py-5">
          <h3 className="d-flex justify-content-center mb-4">Login</h3>
          <TextInput
            label="Email"
            labelStyle={{ minWidth: "80px" }}
            type="email"
            className="mb-3"
            icon={<i class="fa-solid fa-envelope"></i>}
            name="email"
            value={account.email}
            onChange={onChange}
          />
          <TextInput
            label="Password"
            labelStyle={{ minWidth: "80px" }}
            type="password"
            className="mb-3"
            icon={<i className="fa-solid fa-lock"></i>}
            name="password"
            value={account.password}
            onChange={onChange}
          />
          <div className="d-flex justify-content-end mb-3">
            <div>Quên mật khẩu?</div>
          </div>
          <div className="btn btn-danger w-100 mb-3" onClick={handleSignIn}>
            Đăng nhập
          </div>
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
