import React from 'react'

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
