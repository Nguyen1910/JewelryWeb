import React, { memo } from "react";
import "./BannerSection.css";

const BannerSection = () => {
  return (
    <section className="banner_section mb-109">
      <div className="container">
        <div className="section_title mb-60">
          <h2>featured collections</h2>
        </div>
        <div className="banner_container d-flex justify-content-between">
          <div className="single_banner position-relative mr-30 col-9 ">
            <img
              src="media/img/banner/Nhan_1200x450.png"
              alt="Nhan_1200x450.png"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
            <div className="banner_text position-absolute">
              <h3 className="text-white">Diamond ring</h3>
              <p className="text-white">Bringing you solemn nobility</p>
              <a className="btn btn-primary mt-5" href="shop.html">
                Shop Now
              </a>
            </div>
          </div>
          <div className="single_banner position-relative col-3">
            <img
              src="media/img/banner/chup-anh-quang-cao-trang-suc3.png"
              className="w-100 h-100"
              alt="chup-anh-quang-cao-trang-suc3.png"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BannerSection);
