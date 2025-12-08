import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../components/TestimonialCard";
import { testimonialData } from "../components/TestimonialData";

function TestimonialsSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      {testimonialData.map((item, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard
            img={item.img}
            titleSmall={item.titleSmall}
            titleLarge={item.titleLarge}
            titleLargeDark={item.titleLargeDark}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialsSlider;
