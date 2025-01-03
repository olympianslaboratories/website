import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import bannerImage2 from "../assets/Banner2.png";
import bannerImage3 from "../assets/Banner3.png";

// Import all images
const importAll = (r) => r.keys().map(r);
const injectableImages = importAll(
  require.context("../assets/products/", false, /\.(png|jpe?g|svg)$/)
);
const peptideImages = importAll(
  require.context("../assets/products", false, /\.(png|jpe?g|svg)$/)
);
const supplementImages = importAll(
  require.context("../assets/products/", false, /\.(png|jpe?g|svg)$/)
);

const Products = () => {
  // State to manage active category and images
  const [activeCategory, setActiveCategory] = useState("Injectables");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define categories with their images
  const categories = {
    Injectables: injectableImages.slice(0, 9),
    Peptides: peptideImages.slice(0, 9),
    Supplements: supplementImages.slice(0, 9),
  };

  const products = categories[activeCategory].map((image, index) => ({
    id: index + 1,
    image: image,
    alt: `${activeCategory} ${index + 1}`,
  }));

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const moveNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const movePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <section className="bg-white mt-4">
      {/* Banner Carousel */}
      <div className="relative w-full mt-20">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full h-[50vh] md:h-[calc(100vh-95px)]"
        >
          <SwiperSlide>
            <img
              src={bannerImage3}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImage2}
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImage3}
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto flex gap-10 mt-16">
        {/* Sidebar */}
        <div className="w-1/4 hidden md:block">
          <div className="flex flex-col gap-4">
            {["Injectables", "Peptides", "Supplements"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-left font-medium ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span
                  className={`inline-block w-5 h-5 ${
                    activeCategory === category
                      ? "bg-white rounded-full"
                      : "bg-gray-400"
                  }`}
                ></span>
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl md:max-w-4xl mx-auto">
              Explore our wide range of {activeCategory.toLowerCase()} tailored to meet your needs.
            </p>
          </div>

          {/* Product Grid for Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                onClick={() => openLightbox(index)}
                className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold">{product.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel for Mobile */}
          <Swiper
            className="md:hidden"
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div
                  className="cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="md:hidden w-full h-56 object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="relative w-full mt-20">
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Injectables</h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our journey is a testament to our pursuit of a healthier tomorrow, as we are steadfast in our mission to ensure progressive and advanced healthcare solutions for patients in need. 
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full h-[50vh] md:h-[calc(100vh-95px)]"
        >
          <SwiperSlide>
            <img
              src={bannerImage3}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImage2}
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImage3}
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div> 

      <div className="relative w-full mt-20">
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Peptides</h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our journey is a testament to our pursuit of a healthier tomorrow, as we are steadfast in our mission to ensure progressive and advanced healthcare solutions for patients in need. 
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full h-[50vh] md:h-[calc(100vh-95px)]"
        >
          <SwiperSlide>
            <img
              src={bannerImage3}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImage2}
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImage3}
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div> 

      <div className="relative w-full mt-20">
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Supplements</h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our journey is a testament to our pursuit of a healthier tomorrow, as we are steadfast in our mission to ensure progressive and advanced healthcare solutions for patients in need. 
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full h-[50vh] md:h-[calc(100vh-95px)]"
        >
          <SwiperSlide>
            <img
              src={bannerImage3}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImage2}
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerImage3}
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div> 

      {/* Lightbox for Product Images */}
      {isLightboxOpen && (
        <Lightbox
          mainSrc={products[currentImageIndex].image}
          nextSrc={products[(currentImageIndex + 1) % products.length].image}
          prevSrc={
            products[
              (currentImageIndex - 1 + products.length) % products.length
            ].image
          }
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMoveNextRequest={moveNext}
          onMovePrevRequest={movePrev}
          imageCaption={products[currentImageIndex].alt}
        />
      )}
    </section>
  );
};

export default Products;
