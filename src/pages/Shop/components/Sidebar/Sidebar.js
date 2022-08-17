import React, { memo, useEffect, useState } from "react";
import ReactSlider from "react-slider";
import apiClient from "../../../../api/ApiConfig";
import { convertPrice } from "../../../../ultis/convertPrice";
import "./sidebar.css";

const SIZE = [
  { id: "S", value: "S" },
  { id: "M", value: "M" },
  { id: "L", value: "L" },
];
const GENDER = [
  { id: null, value: "Tất cả" },
  { id: 0, value: "Nam" },
  { id: 1, value: "Nữ" },
];

const COLORS = [
  { id: null, value: "Tất cả" },
  { id: "trắng", value: "Trắng" },
  { id: "trắng đen", value: "Trắng + đen" },
  { id: "đen", value: "Đen" },
];

const MATERIAL = [
  { id: null, value: "Tất cả" },
  { id: "vàng", value: "Vàng" },
  { id: "kim cương", value: "Kim cương" },
];

const Sidebar = ({ setFilter, filter }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(50000000);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const data = await apiClient.get("/brand");
        setBrands([...data.data]);
      } catch (error) {
        console.log(error);
      }
    };

    const getCategories = async () => {
      try {
        const data = await apiClient.get("/category");
        setCategories([...data.data]);
      } catch (error) {
        console.log(error);
      }
    };

    getBrands();
    getCategories();
  }, []);

  const handleChooseAside = (name, value) => {
    if (filter[name] !== value) {
      setFilter({ ...filter, [name]: value });
    } else {
      setFilter({ ...filter, [name]: null });
    }
  };

  return (
    <div className="sidebar_widget">
      <div className="widget_inner">
        <div className="widget_list">
          <ul>
            <li className="widget_item">
              <div
                className="widget_item_name"
                data-bs-toggle="collapse"
                href="#brand"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                brand
              </div>
              <div className="collapse" id="brand">
                <ul className="widget_item_sub">
                  {brands.map((brand, index) => (
                    <li
                      key={index}
                      className={`${
                        filter.brandId === brand.id ? "active" : ""
                      }`}
                      onClick={() => handleChooseAside("brandId", brand.id)}
                    >
                      {brand.name}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="widget_item">
              <div
                className="widget_item_name"
                data-bs-toggle="collapse"
                href="#categories"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                categories
              </div>
              <div className="collapse" id="categories">
                <ul className="widget_item_sub">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className={`${
                        filter.categoryId === category.id ? "active" : ""
                      }`}
                      onClick={() =>
                        handleChooseAside("categoryId", category.id)
                      }
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="widget_item">
              <div
                className="widget_item_name"
                data-bs-toggle="collapse"
                href="#material"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                material
              </div>
              <div className="collapse" id="material">
                <ul className="widget_item_sub">
                  {MATERIAL.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        filter.material === item.id ? "active" : ""
                      }`}
                      onClick={() => handleChooseAside("material", item.id)}
                    >
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="widget_item">
              <div
                className="widget_item_name"
                data-bs-toggle="collapse"
                href="#gender"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                gender
              </div>
              <div className="collapse" id="gender">
                <ul className="widget_item_sub">
                  {GENDER.map((item, index) => (
                    <li
                      key={index}
                      className={`${filter.gender === item.id ? "active" : ""}`}
                      onClick={() => handleChooseAside("gender", item.id)}
                    >
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="widget_item">
              <div
                className="widget_item_name"
                data-bs-toggle="collapse"
                href="#size"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Size
              </div>
              <div className="collapse" id="size">
                <ul className="widget_item_sub d-flex">
                  {SIZE.map((item, index) => (
                    <li
                      key={index}
                      className={`border rounded-circle d-flex justify-content-center align-items-center me-3 ${
                        filter.size === item.id ? "active" : ""
                      }`}
                      style={{ width: "40px", height: "40px" }}
                      onClick={() => handleChooseAside("size", item.id)}
                    >
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="widget_item">
              <div
                className="widget_item_name"
                data-bs-toggle="collapse"
                href="#color"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                color
              </div>
              <div className="collapse" id="color">
                <ul className="widget_item_sub">
                  {COLORS.map((item, index) => (
                    <li
                      key={index}
                      className={`${filter.color === item.id ? "active" : ""}`}
                      onClick={() => handleChooseAside("color", item.id)}
                    >
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="widget_item">
              <div className="widget_item_name" style={{ cursor: "default" }}>
                Price
              </div>
              <div style={{ height: "100px" }}>
                <div className="d-flex justify-content-between mb-1">
                  <span>{convertPrice(min)}</span>
                  <span>{convertPrice(max)}</span>
                </div>
                <ReactSlider
                  defaultValue={[min, max]}
                  className="slider"
                  trackClassName="tracker"
                  min={0}
                  max={50000000}
                  minDistance={5000000}
                  step={1000000}
                  withTracks={true}
                  pearling={true}
                  renderThumb={(props) => {
                    return <div {...props} className="thumb"></div>;
                  }}
                  renderTrack={(props) => {
                    return <div {...props} className="track"></div>;
                  }}
                  onChange={([min, max]) => {
                    setMin(min);
                    setMax(max);
                    handleChooseAside("price", { min, max });
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Sidebar);
