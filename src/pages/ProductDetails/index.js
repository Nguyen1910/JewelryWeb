import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "react-star-ratings";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import "./productDetails.css";
import apiClient from "../../api/ApiConfig";
import { convertPrice } from "../../ultis/convertPrice";
import { URL_IMG_PRODUCT } from "../../ultis/configURL";

const Index = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const getProductById = async () => {
      const response = await apiClient.get(`/product/${id}`);
      const data = response.data;
      console.log(data);
      setProduct({ ...data });
    };
    getProductById();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb_content">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>product</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="product_swiper"
          >
            {product.image &&
              product.image.map((item, index) => (
                <SwiperSlide>
                  <img src={`${URL_IMG_PRODUCT}${product.id}/${index}`} />
                </SwiperSlide>
              ))}
          </Swiper>
          {/* <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper> */}
        </div>
        <div className="col-lg-6 col-md-6 product_d_right">
          <h1>{product.name}</h1>
          <div className="product_ratting_review d-flex align-items-center">
            <div className=" product_ratting">
              <ul className="d-flex">
                <li>
                  <a href="#">
                    <i className="ion-ios-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-ios-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-ios-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-ios-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-ios-star"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="product_review mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <StarRatings
                  rating={4}
                  starDimension="20px"
                  starSpacing="2px"
                  starRatedColor="#ffc107"
                />
                <ul className="d-flex mt-2 ms-3">
                  <li>4 reviews</li>
                  <li>|</li>
                  <li>Write your review</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="price_box">
            <span className="current_price">{convertPrice(product.price)}</span>
          </div>
          <div className="product_desc">
            <p>{product.description}</p>
          </div>
          <div className="product_variant">
            <div className="filter__list widget_color d-flex align-items-center mb-3">
              <h3>select color</h3>
              <ul className="select_color d-flex">
                <li>
                  <div
                    className="select_color_item shadow-lg active"
                    style={{
                      background: "black",
                    }}
                  >
                    <i class="fa-solid fa-check text-white"></i>
                  </div>
                </li>
                <li>
                  <div
                    className="select_color_item shadow-lg"
                    style={{
                      background: "white",
                    }}
                  >
                    <i class="fa-solid fa-check text-dark"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div className="filter__list widget_size d-flex align-items-center mb-3">
              <h3>select size</h3>
              <ul className="select_size">
                <li>
                  <div className="select_size_item active">S</div>
                </li>
                <li>
                  <div className="select_size_item">M</div>
                </li>
                <li>
                  <div className="select_size_item">L</div>
                </li>
              </ul>
            </div>

            <div className="variant_quantity_btn d-flex">
              <div className="pro-qty border me-3">
                <div className="btn-qty">
                  <i class="fa-solid fa-minus"></i>
                </div>
                <input min="1" max="100" type="tex" value="1" />
                <div className="btn-qty">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                <i className="ion-android-add"></i> Add To Cart
              </button>
              <a className="wishlist" href="#">
                <i className="ion-ios-heart"></i>
              </a>
            </div>
          </div>
          {/* <div className="product_sku">
            <p>
              <span>SKU: </span> #ABC123456
            </p>
          </div>
          <div className="product_tags d-flex">
            <span>tags: </span>
            <ul className="d-flex">
              <li>
                <a href="#">fashion,</a>
              </li>
              <li>
                <a href="#">clothings,</a>
              </li>
              <li>
                <a href="#">accessorires</a>
              </li>
            </ul>
          </div>
          <div className="priduct_social d-flex">
            <span>SHARE: </span>
            <ul>
              <li>
                <a href="#">
                  <i className="ion-social-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-googleplus-outline"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ion-social-instagram-outline"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
