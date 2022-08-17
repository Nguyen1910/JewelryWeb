import React, { memo } from "react";

const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide w-100 h-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner h-100">
        <div className="carousel-item active">
          <img
            src="media/img/banner/banner-top-trang-chu-1920x703-manh-ghep-xem-them.jpg"
            className="d-block w-100 h-100"
            style={{ objectFit: "contain" }}
            alt="banner-top-trang-chu-1920x703-manh-ghep-xem-them.jpg"
          />
        </div>
      </div>
      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default memo(Slider);
