import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import "./ProductSection.css";
import { convertPrice } from "../../../../ultis/convertPrice";
import { URL_IMG_PRODUCT, URL_IMG_USER } from "../../../../ultis/configURL";
import ProductCard from "../../../../components/ProductCard/ProductCard";

const ProductSection = (props) => {
  const { products } = props;
  return (
    <section className="product_section mb-96">
      <div className="container">
        <div className="product_header d-flex justify-content-between  mb-50">
          <div className="section_title">
            <h2>best selling items</h2>
          </div>
          <div className="product_tab_btn d-flex ">
            <div className="all_product">
              <a href="shop.html" className="text-dark">
                All Product
              </a>
            </div>
          </div>
        </div>
        <div className="product_container row">
          <div className="fade show active" id="all" role="tabpanel">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              // slidesPerGroup={4}
              loop={true}
              loopFillGroupWithBlank={true}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {products.length > 0 &&
                products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
