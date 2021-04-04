import React from 'react';
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import Config from "../../Config";
import styles from ""

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
                    <div>
                        <img
                            src={`${Config.contentUrl}${Images[0].url}`}
                        />
                    </div>
                ))
            : ""}
        </Slide>
    )
}

export default SlideShow
