/** @format */

import React from "react";
import ImageGallery from "react-image-gallery";
import Config from "../../Config";

import "./ImageSlider.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";

const ImageSlider = ({ images }) => {
  console.log(images);
  return (
    <div>
      {images.length && images.length === 1
        ? SingleImage(images[0])
        : MultipleImages(images)}
    </div>
  );
};

const SingleImage = (image) => {
  return (
    <img
      src={Config.contentUrl + image["url"]}
      className='single-image'
      alt=''
    />
  );
};

const MultipleImages = (images) => {
  const imgSrcs = images.map(({ formats }) => ({
    original: Config.contentUrl + formats["large"]["url"],
    thumbnail: Config.contentUrl + formats["thumbnail"]["url"],
  }));

  return (
    <ImageGallery
      items={imgSrcs}
      infinite={false}
      showThumbnails={false}
      showPlayButton={false}
    />
  );
};

export default ImageSlider;
