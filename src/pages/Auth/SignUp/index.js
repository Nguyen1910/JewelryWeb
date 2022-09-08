import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../../api/ApiConfig";
import TextInput from "../../../components/TextInput";
import UploadImage from "../../../components/UploadImage";

import "./SignUp.css";

const Index = () => {
  const [confirmPass, setConfirmPass] = useState("");
  const [logoutAccount, setLogoutAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    avatar: {},
    gender: 0,
  });
  console.log(logoutAccount);
  const navigate = useNavigate();

  const onChangeFile = (e) => {
    const newFile = e.target.files[0];
    newFile.preview = URL.createObjectURL(newFile);
    if (newFile.preview !== null) {
      setLogoutAccount({ ...logoutAccount, avatar: newFile });
    }
  };

  const onChange = (e) => {
    setLogoutAccount({ ...logoutAccount, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const newAccount = {
      ...logoutAccount,
      avatar: { ...logoutAccount.avatar },
    };
    if (
      newAccount.firstName === "" ||
      newAccount.lastName === "" ||
      newAccount.email === "" ||
      newAccount.phone === "" ||
      newAccount.address === "" ||
      newAccount.avatar === {} ||
      newAccount.password === ""
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
    } else {
      if (logoutAccount.password === confirmPass) {
        try {
          if (newAccount.avatar !== null) {
            delete newAccount.avatar.preview;
          }
          const formData = new FormData();
          formData.append("firstName", logoutAccount.firstName);
          formData.append("lastName", logoutAccount.lastName);
          formData.append("email", logoutAccount.email);
          formData.append("phone", logoutAccount.phone);
          formData.append("address", logoutAccount.address);
          formData.append("password", logoutAccount.password);
          formData.append("avatar", logoutAccount.avatar);
          formData.append("gender", logoutAccount.gender);
          formData.append("allCodeId", "ROLE2");
          formData.append("isDeleted", 0);
          const req = await apiClient.post("/user", formData);
          navigate("/signIn");
          alert("Đăng ký tài khoản thành công!");
          setLogoutAccount({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            avatar: {},
            gender: 0,
          });
          setConfirmPass("");
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Mật khẩu xác nhận không chính xác");
      }
    }
  };

  console.log(logoutAccount);

  return (
    <div className="container">
      <div className="row">
        <div className="w-500px mx-auto shadow-lg rounded mt-3 px-4 py-4">
          <h3 className="d-flex justify-content-center mb-4">
            Create logoutAccount
          </h3>
          <TextInput
            label="First Name"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3 me-3"
            name="firstName"
            value={logoutAccount.firstName}
            onChange={onChange}
            icon={<i className="fa-solid fa-user"></i>}
          />
          <TextInput
            label="Last Name"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3"
            name="lastName"
            value={logoutAccount.lastName}
            onChange={onChange}
            icon={<i className="fa-solid fa-user"></i>}
          />
          <TextInput
            label="Email"
            labelStyle={{ width: "130px" }}
            type="email"
            className="mb-3"
            name="email"
            value={logoutAccount.email}
            onChange={onChange}
            icon={<i className="fa-solid fa-envelope"></i>}
          />
          <TextInput
            label="Phone"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3"
            name="phone"
            value={logoutAccount.phone}
            onChange={onChange}
            icon={<i className="fa-solid fa-phone"></i>}
          />
          <TextInput
            label="Address"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3"
            name="address"
            value={logoutAccount.address}
            onChange={onChange}
            icon={<i className="fa-solid fa-map-location-dot"></i>}
          />
          <TextInput
            label="Password"
            labelStyle={{ width: "130px" }}
            type="password"
            className="mb-3"
            icon={<i className="fa-solid fa-lock"></i>}
            onChange={onChange}
            name="password"
            value={logoutAccount.password}
          />
          <TextInput
            label="Confirm password"
            labelStyle={{ width: "130px" }}
            type="password"
            className="mb-3"
            icon={<i className="fa-solid fa-lock"></i>}
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <div className="d-flex align-items-center mb-3">
            <label className="" style={{ width: "100px", fontWeight: "600" }}>
              Avatar
            </label>
            <div
              className="rounded-circle overflow-hidden"
              style={{ height: "80px", width: "80px" }}
            >
              <UploadImage
                multiple={false}
                onChangeFile={onChangeFile}
                style={{ border: "1px dashed green", borderRadius: "50%" }}
                image={logoutAccount.avatar.preview}
              />
            </div>
          </div>
          <div className="d-flex mb-3" style={{ fontWeight: "600" }}>
            <div className="me-5">Gender</div>
            <div className="d-flex">
              <div className="me-5">
                <input
                  type="radio"
                  value={0}
                  name="gender"
                  onChange={onChange}
                  checked={logoutAccount.gender == 0 && true}
                />{" "}
                Male
              </div>
              <div>
                <input
                  type="radio"
                  value={1}
                  name="gender"
                  onChange={onChange}
                  checked={logoutAccount.gender == 1 && true}
                />{" "}
                Female
              </div>
            </div>
          </div>
          <div
            className="btn btn-danger w-100 mb-3"
            onClick={() => {
              handleRegister();
            }}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
