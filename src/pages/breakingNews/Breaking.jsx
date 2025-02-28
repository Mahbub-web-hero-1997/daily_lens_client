import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Breaking = ({ breaking }) => {
  const { title, description, image } = breaking;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  );
};

export default Breaking;
