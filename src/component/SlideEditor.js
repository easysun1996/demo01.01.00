import React, { useState } from 'react';
import SlideList from './SlideList';
import '../styles/main.scss'

const SlideEditor = ({ initialSlides }) => {
  const [slides, setSlides] = useState(initialSlides);
  const [heading01, setHeading01] = useState('title');
  const [heading02, setHeading02] = useState('sub title');

  const handleHeadingChange = (e) => {
    setHeading01(e.target.value);
  };

  const handlSubChange = (e) => {
    setHeading02(e.target.value);
  };


  const handleSlideAdd = () => {
    const newSlide = {
      imageURL: '',
    };

    setSlides([...slides, newSlide]);
  };

  const handleSlideDelete = (index) => {
    // 가장 마지막 슬라이드부터 삭제하기 위해 역순으로 인덱스 계산
    const lastIndex = slides.length - 1 - index;
    const updatedSlides = slides.filter((_, slideIndex) => slideIndex !== lastIndex);
    setSlides(updatedSlides);
  };

  const handleImageUpload = (imageURL, index) => {
    const updatedSlides = [...slides];
    updatedSlides[index].imageURL = imageURL;
    setSlides(updatedSlides);
  };

  return (
    <div>
      <div className='d_title_txt_wrap'>
        <input className='d_title_txt'  type="text" value={heading01} onChange={handleHeadingChange} />
        <input className='d_sub_txt'  type="text" value={heading02} onChange={handlSubChange} />
      </div>
      <SlideList
        slides={slides}
        onAddSlide={handleSlideAdd}
        onDeleteSlide={handleSlideDelete}
        onImageUpload={handleImageUpload}
      />
    </div>
  );
};

export default SlideEditor;
