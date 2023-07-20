import React from 'react';
import ImageUploader from './ImageUploader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SlideList = ({ slides, onAddSlide, onDeleteSlide, onImageUpload }) => {
  return (
    <div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      {slides.map((slide, index) => (
        <div key={index}>
           <SwiperSlide>
          <ImageUploader onImageUpload={(imageURL) => onImageUpload(imageURL, index)} />
          <button className='d_delet_slide' onClick={() => onDeleteSlide(index)}>Delete</button>
          </SwiperSlide>
        </div>
      ))}   
      </Swiper>
      <button className='d_add_slide' onClick={onAddSlide}>+</button>
    </div>
  );
};

export default SlideList;
