import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, FreeMode } from "swiper";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <section className="blog_section mb-140">
      <div className="container">
        <div className="product_header border-top d-flex justify-content-between  mb-60">
          <div className="section_title">
            <h2>press & look</h2>
          </div>
          <div className="all_articles">
            <a href="blog.html">All articles</a>
          </div>
        </div>
        <div className="blog_container row">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            FreeMode={(true, true)}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="col single_blog">
                <div>
                  <div className="blog_thumb">
                    <a href="blog-details.html">
                      <img
                        src="media/img/blog/Top-5-nhan-cuoi-ban-chay-nhat-thang-7-4.jpg"
                        alt="Top-5-nhan-cuoi-ban-chay-nhat-thang-7-4.jpg"
                        className="w-100"
                      />
                    </a>
                  </div>
                  <figcaption className="blog_content">
                    <div className="blog_meta">
                      <ul className="d-flex">
                        <li>
                          <span className="meta_tag">News</span>
                        </li>
                        <li>
                          <span>August 25, 2022</span>
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <a href="blog-details.html">
                        Top 5 nhẫn cưới bán chạy nhất tháng 7
                      </a>
                    </h3>
                  </figcaption>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col single_blog">
                <div>
                  <div className="blog_thumb">
                    <a href="blog-details.html">
                      <img
                        src="media/img/blog/5-kieu-vay-cuoi-dep-nhat-cho-mua-cuoi-cuoi-nam-2022.jpg"
                        alt="5-kieu-vay-cuoi-dep-nhat-cho-mua-cuoi-cuoi-nam-2022.jpg"
                        className="w-100"
                      />
                    </a>
                  </div>
                  <figcaption className="blog_content">
                    <div className="blog_meta">
                      <ul className="d-flex">
                        <li>
                          <span className="meta_tag">News</span>
                        </li>
                        <li>
                          <span>August 25, 2022</span>
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <a href="blog-details.html">
                        5 kiểu váy cưới đẹp nhất cho mùa cưới cuối năm 2022
                      </a>
                    </h3>
                  </figcaption>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col single_blog">
                <div>
                  <div className="blog_thumb">
                    <a href="blog-details.html">
                      <img
                        src="media/img/blog/Nhung-chi-tiet-nho-giup-dam-cuoi-cua-ban-tro-thanh-mot-trai-nghiem-kho-quen-1.jpg"
                        alt="5-kieu-vay-cuoi-dep-nhat-cho-mua-cuoi-cuoi-nam-2022.jpg"
                        className="w-100"
                      />
                    </a>
                  </div>
                  <figcaption className="blog_content">
                    <div className="blog_meta">
                      <ul className="d-flex">
                        <li>
                          <span className="meta_tag">News</span>
                        </li>
                        <li>
                          <span>August 25, 2022</span>
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <a href="blog-details.html">
                        Những chi tiết nhỏ giúp đám cưới của bạn trở thành một
                        trải nghiệm khó quên
                      </a>
                    </h3>
                  </figcaption>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
