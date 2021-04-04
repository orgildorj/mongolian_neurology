import React from 'react';
import { Slide } from "react-slideshow-image";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

function SlideShow({articles}) {
    return (
        <Slide {...properties}>
            {articles.length
                ? articles.map(({ id, Title, Text, Date, Images }) => (
                    <div>Hello</div>
                ))
            : ""}
        </Slide>
    )
}

export default SlideShow
