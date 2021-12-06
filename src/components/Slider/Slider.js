import React, { useState } from "react";
import SliderContent from "./SliderContent";
import "./Slider.scss";
import Arrows from "./Arrows";

const Slider = ({ slideData }) => {
  const len = slideData.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='slider'>
      <SliderContent slideData={slideData} activeIndex={activeIndex} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </div>
  );
};

export default Slider;
