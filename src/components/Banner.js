import React from "react";
import '../styles/components/_banner.scss'

function Banner(props) {
    return (
        <div className="banner" style={{backgroundImage: `url(${props.bgImage})`}}>
           {props.title && <h1>{props.title}</h1>}
        </div>
    )
}

export default Banner