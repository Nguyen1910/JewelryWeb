import React, { memo, useEffect, useState } from "react";
import "./shopContent.css";
import { Link } from "react-router-dom";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import apiClient from "../../../../api/ApiConfig";
import queryString from "query-string";

const ShopContent = ({ filter }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const query = queryString.stringify(filter);
    const getProduct = async () => {
      const response = await apiClient.post(
        "/product/filter?page=1&limit=9",
        filter
      );
      const data = response.data.data;
      console.log(data);
      setProducts([...data]);
    };
    getProduct();
  }, [filter]);
  return (
    <>
      <div className="breadcrumb_content">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>shop</li>
        </ul>
      </div>
      <div className="shop_toolbar_wrapper d-flex justify-content-between align-items-center">
        <div className="page_amount">
          <p>
            <span>1.260</span> Products Found
          </p>
        </div>
        <div className=" sorting_by d-flex align-items-center">
          <span>SORT BY :</span>
          <form className="select_option" action="#">
            <select name="orderby" id="short">
              <option selected value="1">
                NAME 3
              </option>
              <option value="2">NAME 4</option>
              <option value="3">NAME 5</option>
              <option value="4">NAME 6</option>
              <option value="5">NAME 7</option>
              <option value="6">NAME 8</option>
            </select>
          </form>
        </div>
        <div className="toolbar_btn_wrapper d-flex align-items-center">
          <div className="view_btn">
            <a className="view" href="#">
              VIEW
            </a>
          </div>
          <div className="shop_toolbar_btn">
            <ul className="d-flex align-items-center">
              <li>
                <a
                  href="#"
                  className="active btn-grid-3"
                  data-role="grid_3"
                  data-tippy="3"
                  data-tippy-inertia="true"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-placement="top"
                >
                  <i className="ion-grid"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="btn-list"
                  data-role="grid_list"
                  data-tippy="List"
                  data-tippy-inertia="true"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-placement="top"
                >
                  <i className="ion-navicon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row shop_wrapper">
        {products.length > 0 ? (
          <>
            {products.map((product, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-4 col-sm-6 col-6 mb-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
            <div className="d-flex justify-content-end">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        ) : (
          <div>không tìm thấy sản phẩm nào</div>
        )}
      </div>
    </>
  );
};

export default memo(ShopContent);
