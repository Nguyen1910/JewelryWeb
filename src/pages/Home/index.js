import React, { useEffect, useState } from "react";
import apiClient from "../../api/ApiConfig";
import BannerSection from "./components/BannerSection/BannerSection";
import BlogSection from "./components/BlogSection/BlogSection";
import LetterSection from "./components/LetterSection/LetterSection";
import ProductSection from "./components/ProductSection/ProductSection";
import ShippingSection from "./components/ShippingSection/ShippingSection";
import Slider from "./components/slider/Slider";

const Index = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const response = await apiClient.get("/product?page=1&limit=9");
      const data = response.data.data;
      console.log(data);
      setProducts([...data]);
    };
    getProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Slider />
      <ShippingSection />
      <BannerSection />
      <ProductSection products={products} />
      <BlogSection />
      <LetterSection />
    </>
  );
};

export default Index;
