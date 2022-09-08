import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import queryString from "query-string";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import StarRatings from "react-star-ratings";
import { Rating } from "react-simple-star-rating";

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
import { URL_IMG_PRODUCT, URL_IMG_USER } from "../../ultis/configURL";
import { buyProduct } from "../../store/actions/cartAction";
import { convertDate } from "../../ultis/convertDate";

const Index = () => {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState({
    productId: id,
    userId: currentUser.id,
    comment: null,
    rate: null,
  });
  const [reviews, setReviews] = useState([]);

  const getCmt = async (productId) => {
    try {
      // const query = queryString.stringify({ productId });
      console.log(productId);
      const req = await apiClient.get(`rating/${productId}`);
      // console.log(req);
      setReviews([...req.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await apiClient.get(`/product/${id}`);
      const data = response.data;
      setProduct({ ...data, quantity: quantity });
    };

    getProductById();
    getCmt(id);
  }, [id]);

  const handleRating = (rate) => {
    setRating(rate);
    setReview({ ...review, rate: rate / 20 });
    // other logic
  };

  const onChange = (e) => {
    setReview({ ...review, comment: e.target.value });
  };

  const handleSubmitCmt = async (productId) => {
    const data = { ...review };
    if (currentUser.id !== undefined) {
      if (data.comment !== "") {
        try {
          const addCmt = await apiClient.post("/rating", { ...data });
          getCmt(id);
          setReview({
            productId: id,
            userId: currentUser.id,
            comment: null,
            rate: null,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("Vui lòng đăng nhập để comment");
    }
  };

  const handleOnKeyPress = (e, productId) => {
    // if (e.which === 13 && e.shiftKey === false) {
    //   e.preventDefault();
    //   handleSubmitCmt(productId);
    //   try {
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

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
            <div className="product_review mb-3">
              <div className="d-flex align-items-center justify-content-center">
                <Rating initialValue={4.5} readonly={true} />
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
                <div
                  className="btn-qty"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <i className="fa-solid fa-minus"></i>
                </div>
                <input
                  min="1"
                  max="100"
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
                <div
                  className="btn-qty"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  dispatch(buyProduct({ ...product, quantity: quantity }));
                }}
              >
                <i className="ion-android-add"></i> Add To Cart
              </button>
              <a className="wishlist" href="#">
                <i className="ion-ios-heart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h3 className="mt-5 mb-3">Reviews</h3>
        <div className="mb-3" style={{ fontSize: "18px", fontWeight: "600" }}>
          {reviews.length} review for product
        </div>
        {reviews &&
          reviews
            .sort((a, b) => b.id - a.id)
            .map((item, index) => (
              <div key={index} className="d-flex mb-3">
                <div className="avt_review">
                  <img
                    src={`${URL_IMG_USER}${item.userId}`}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="review_container">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="">
                      {`${item.lastName} ${item.firstName}`} -{" "}
                      <span>{convertDate(item.createdAt)}</span>
                    </p>
                    <div>
                      <Rating
                        initialValue={item.rate}
                        readonly={true}
                        size={20}
                      />
                    </div>
                  </div>
                  <div className="content">{item.comment}</div>
                </div>
              </div>
            ))}
        <p
          style={{
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
          className="mt-3"
        >
          Add A Review
        </p>
        <div
          className="mb-1"
          style={{
            fontSize: "14px",
            fontWeight: "700",
            textTransform: " capitalize",
          }}
        >
          Your Rating
        </div>
        <Rating onClick={handleRating} ratingValue={rating} size={20} />
        <div className="mt-2">Your Review</div>
        <div className="rating_cmt">
          <textarea
            type="text"
            name="comment"
            value={review.comment}
            onChange={onChange}
            onKeyPress={handleOnKeyPress}
          />
        </div>
        <button
          className="btn btn-primary w-100px mt-3"
          onClick={handleSubmitCmt}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Index;
