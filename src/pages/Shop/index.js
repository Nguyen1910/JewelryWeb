import React, { useState } from "react";
import ShopContent from "./components/ShopContent/ShopContent";
import Sidebar from "./components/Sidebar/Sidebar";
import "./shop.css";

const Index = () => {
  const [filter, setFilter] = useState({
    brandId: null,
    categoryId: null,
    material: null,
    gender: null,
    size: null,
    color: null,
    // price: { min: 0, max: 50000000 },
  });
  console.log(filter);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <Sidebar setFilter={setFilter} filter={filter} />
          </div>
          <div className="col-lg-9 col-md-12">
            <ShopContent filter={filter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
