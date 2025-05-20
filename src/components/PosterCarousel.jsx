import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Controller } from "swiper/modules";

const PosterCarousel = ({
  setSwiperInstance,
  swiperInstance,
  setActiveIndex,
  movieDetails,
}) => {
  const baseURL = "http://localhost:8000"; // Base URL for the backend

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
        className="h-[30rem]" // Adjusted height of the Swiper container
      >
        {movieDetails.map((movie, index) => (
          <SwiperSlide
            key={index}
            className="!w-[20rem] !h-[26rem] flex justify-center items-center"
          >
            <img
              src={`${baseURL}${movie.posterPath}`}
              alt={movie.movietitle}
              className="w-[20rem] h-[26rem] rounded-md object-cover border-4 border-white shadow-md shadow-[#2D2D2F]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PosterCarousel;
