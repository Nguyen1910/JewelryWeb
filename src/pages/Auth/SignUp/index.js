import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../../components/TextInput";
import UploadImage from "../../../components/UploadImage";

import "./SignUp.css";

const Index = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    avatar: {},
    gender: 0,
  });
  const [file, setFile] = useState({});

  const onChangeFile = (e) => {
    const newFile = e.target.files[0];
    newFile.preview = URL.createObjectURL(newFile);
    if (newFile.preview !== null) {
      setFile({ ...newFile });
    }
  };

  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // console.log(newUser);

  return (
    <div className="container">
      <div className="row">
        <div className="w-500px mx-3 mx-auto">
          <h3 className="d-flex justify-content-center my-5">Create account</h3>
          <TextInput
            label="First Name"
            labelStyle={{ width: "110px" }}
            type="text"
            className="mb-3 me-3"
            name="firstName"
            value={newUser.firstName}
            onChange={onChange}
          />
          <TextInput
            label="Last Name"
            labelStyle={{ width: "110px" }}
            type="text"
            className="mb-3"
            name="lastName"
            value={newUser.lastName}
            onChange={onChange}
          />
          <TextInput
            label="Email"
            labelStyle={{ width: "110px" }}
            type="email"
            className="mb-3"
            name="email"
            value={newUser.email}
            onChange={onChange}
          />
          <TextInput
            label="Phone"
            labelStyle={{ width: "110px" }}
            type="text"
            className="mb-3"
            name="phone"
            value={newUser.phone}
            onChange={onChange}
          />
          <TextInput
            label="Address"
            labelStyle={{ width: "110px" }}
            type="text"
            className="mb-3"
            name="address"
            value={newUser.address}
            onChange={onChange}
          />
          <TextInput
            label="Password"
            labelStyle={{ width: "110px" }}
            type="password"
            className="mb-3"
          />
          <TextInput
            label="Confirm password"
            labelStyle={{ width: "110px" }}
            type="password"
            className="mb-3"
          />
          <div className="d-flex align-items-center">
            <label className="" style={{ width: "90px", fontWeight: "600" }}>
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
                image={file.preview}
              />
            </div>
          </div>
          <div className="">
            <input type="radio" value={0} /> Male
            <input type="radio" value={1} /> Female
          </div>
          <div className="btn btn-danger w-100 mb-3">Register</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
