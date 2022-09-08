import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiClient from "../../../../api/ApiConfig";
import TextInput from "../../../../components/TextInput";
import UploadImage from "../../../../components/UploadImage";

import "./editProduct.css";

const Index = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getBrand = async () => {
      try {
        const req = await apiClient.get("/brand");
        setBrand([...req.data]);
      } catch (error) {
        console.log(error);
      }
    };
    const getCategory = async () => {
      try {
        const req = await apiClient.get("/category");
        setCategory([...req.data]);
      } catch (error) {
        console.log(error);
      }
    };

    const getProduct = async () => {
      try {
        const req = await apiClient.get(`/product/${id}`);
        setProduct({ ...req.data });
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
    getBrand();
    getCategory();
  }, []);

  const onChangeFile = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.files[0] });
  };

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const newProduct = { ...product };
    if (
      newProduct.name === "" ||
      newProduct.price === "" ||
      newProduct.description === "" ||
      newProduct.material === "" ||
      newProduct.gender === "" ||
      newProduct.amount === "" ||
      newProduct.color === ""
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
    } else {
      try {
        console.log(product);
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("image", product.image1);
        formData.append("image", product.image2);
        formData.append("image", product.image3);
        formData.append("image", product.image4);
        formData.append("material", product.material);
        formData.append("gender", product.gender);
        formData.append("amount", product.amount);
        formData.append("color", product.color);
        formData.append("brandId", product.brandId);
        formData.append("categoryId", product.categoryId);
        const req = await apiClient.put(`/product/${id}`, formData);
        // navigate("/signIn");
        alert("Cập nhật sản phẩm thành công!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="w-500px mx-auto shadow-lg rounded mt-3 px-4 py-4">
          <h3 className="d-flex justify-content-center mb-4">Update product</h3>
          <TextInput
            label="Name"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3 me-3"
            name="name"
            value={product.name}
            onChange={onChange}
          />
          <TextInput
            label="Price"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3"
            name="price"
            value={product.price}
            onChange={onChange}
          />
          <TextInput
            label="Description"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3"
            name="description"
            value={product.description}
            onChange={onChange}
          />
          <TextInput
            label="Image 1"
            labelStyle={{ width: "130px" }}
            type="file"
            className="mb-3"
            name="image1"
            // value={product.image1}
            onChange={onChangeFile}
          />
          <TextInput
            label="Image 2"
            labelStyle={{ width: "130px" }}
            type="file"
            className="mb-3"
            name="image2"
            // value={product.image2}
            onChange={onChangeFile}
          />
          <TextInput
            label="Image 3"
            labelStyle={{ width: "130px" }}
            type="file"
            className="mb-3"
            name="image3"
            // value={product.image3}
            onChange={onChangeFile}
          />
          <TextInput
            label="Image 4"
            labelStyle={{ width: "130px" }}
            type="file"
            className="mb-3"
            name="image1"
            // value={product.image4}
            onChange={onChangeFile}
          />

          <TextInput
            label="Material"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3"
            name="material"
            value={product.material}
            onChange={onChange}
          />
          <div className="d-flex mb-3" style={{ fontWeight: "600" }}>
            <div className="me-5">Gender</div>
            <div className="d-flex">
              <div className="me-5">
                <input
                  type="radio"
                  value={0}
                  name="gender"
                  onChange={onChange}
                  checked={product.gender == 0 && true}
                />{" "}
                Male
              </div>
              <div>
                <input
                  type="radio"
                  value={1}
                  name="gender"
                  onChange={onChange}
                  checked={product.gender == 1 && true}
                />{" "}
                Female
              </div>
            </div>
          </div>
          <TextInput
            label="Amount"
            labelStyle={{ width: "130px" }}
            type="text"
            className="mb-3"
            name="amount"
            value={product.amount}
            onChange={onChange}
          />
          <div
            className="d-flex align-items-center mb-3"
            style={{ fontWeight: "600" }}
          >
            <div className="" style={{ marginRight: "60px" }}>
              Color
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              name="color"
              onChange={onChange}
            >
              <option selected value="Trắng">
                Trắng
              </option>
              <option value="Đen">Đen</option>
              <option value="Đen Trắng">Trắng đen</option>
            </select>
          </div>

          <div
            className="d-flex align-items-center mb-3"
            style={{ fontWeight: "600" }}
          >
            <div className="" style={{ marginRight: "55px" }}>
              Brand
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              name="brandId"
              onChange={onChange}
            >
              {brand.map((item, index) => (
                <option
                  selected={product.brandId === item.id ? true : false}
                  key={index}
                  value={item.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div
            className="d-flex align-items-center mb-3"
            style={{ fontWeight: "600" }}
          >
            <div className="" style={{ marginRight: "30px" }}>
              Category
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              name="categoryId"
              onChange={onChange}
            >
              {category.map((item, index) => (
                <option
                  selected={product.categoryId === item.id ? true : false}
                  key={index}
                  value={item.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div
            className="btn btn-danger w-100 mb-3"
            onClick={() => {
              handleRegister();
            }}
          >
            Update
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
