"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
import bannersData from "./data/banners.json";
import Image from "next/image";

export default function MyBanner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(bannersData);
  }, []);
  return (
    <div className="banner-slider">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="banner-item">
            <Image
              src={`/${banner.imageUrl}`}
              alt={banner.caption}
              width={1920}
              height={620}
            />
            <div className="caption">{banner.caption}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
