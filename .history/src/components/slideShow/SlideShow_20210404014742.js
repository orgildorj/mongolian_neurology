import React from 'react';
import { Slide, Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import Config from "../../Config";
import styles from "./SlideShow.module.css";
import commonStyles from "../Common.module.css";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
  }

function SlideShow({articles}) {
    return (
        <div className={styles.slidesContainer}>
            <Fade {...properties}>
                {articles.length
                    ? articles.map(({ id, Title, Text, Date, Images }) => (
                        <div className={styles.eachSlide}>
                        <div style={{'backgroundImage' : `${Config.contentUrl}${Images[0].url}`}}>
                            
                        </div>
                        </div>
                    ))
                : ""}
            </Fade>
        </div>
    )
}

export default SlideShow
