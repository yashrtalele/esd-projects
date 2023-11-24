import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

export const Slider = ({ slides }) => {
    return (
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
        >
        {slides.map((slide) => (
            <SwiperSlide key={slide.image}>
                <img src={slide.image} alt={slide.title} />
            </SwiperSlide>
        ))}
        </Swiper>
    )

}