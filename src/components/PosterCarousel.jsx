import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Controller } from "swiper/modules";
import { Link } from "react-router-dom";

const PosterCarousel = ({
  setSwiperInstance,
  swiperInstance,
  setActiveIndex,
}) => {
  return (
    <div className="w-[40rem] px-2 mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.8,
        }}
        onSwiper={setSwiperInstance}
        controller={{ control: swiperInstance }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Controller]}
        className="h-[22rem]"
      >
        <SwiperSlide className="!w-[14rem] !h-[20rem] flex justify-center items-center">
          <Link to="/select-seat">
            <img
              src="/in the mood for love poster.jpg"
              alt="slide_image"
              className="w-[14rem] h-[20rem] rounded-md object-cover border-4 border-white shadow-md shadow-[#2D2D2F]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="!w-[14rem] !h-[20rem] flex justify-center items-center">
          <Link to="/select-seat">
            <img
              src="/happy together poster.jpg"
              alt="slide_image"
              className="w-[14rem] h-[20rem] rounded-md object-cover border-4 border-white shadow-md shadow-[#2D2D2F]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="!w-[14rem] !h-[20rem] flex justify-center items-center">
          <Link to="/select-seat">
            <img
              src="/fallen angels poster.jpg"
              alt="slide_image"
              className="w-[14rem] h-[20rem] rounded-md object-cover border-4 border-white shadow-md shadow-[#2D2D2F]"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PosterCarousel;
