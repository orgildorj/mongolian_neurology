import React from "react";
import { Link } from "react-router-dom";
import Config from "../../Config";

const SliderContent = ({ slideData, activeIndex }) => {
  return (
    <section className='slicer-content'>
      {slideData.map((slide, index) => (
        <Link to={"/article/" + slide.id}>
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}>
            {console.log(slide.Images[0].formats)}
            <img
              className='slide-image'
              src={Config.contentUrl + slide.Images[0].formats.medium.url}
              alt=''
            />
            <div className='description'>
              <h2 className='slide-title'>{slide.Title}</h2>
              <p className='slide-text'>
                {slide.Text.substring(0, 200) + "..."}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default SliderContent;
