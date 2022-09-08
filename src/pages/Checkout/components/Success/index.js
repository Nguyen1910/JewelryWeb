import React from "react";
import "./success.css";

const Index = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div style={{ alignItems: "center" }}>
        <div className="d-flex justify-content-center mb-3">
          <i
            className="fa-solid fa-circle-check text-success"
            style={{ fontSize: "60px" }}
          ></i>
        </div>

        <div className="text_order_success text-success">ORDER SUCCESS</div>
      </div>
    </div>
  );
};

export default Index;
