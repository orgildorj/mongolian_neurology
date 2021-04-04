import React from 'react'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

function SlideShow({articles}) {
    return (
        <div>
            {articles.length
                ? articles.map(({ id, Title, Text, Date, Images }) => (
                    <div>Hello</div>
                ))
            : ""}
        </div>
    )
}

export default SlideShow
