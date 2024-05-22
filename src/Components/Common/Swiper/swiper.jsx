import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import styles from "./swiper.module.css";

const SwiperComponent = ({ images, spaceBetween = 30,style="new",container="swiperContainer", slidesPerView = 3 }) => {
  return (
    <div className={`styles.swiperContainer ${styles[container]}`}>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        loop={true}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}> 
            <img src={image}  alt={`Slide ${index} `} className={`styles.image ${styles[style]} `}/>
          </SwiperSlide>
        ))}
          
      </Swiper>

    </div>
  );
};

export default SwiperComponent;
