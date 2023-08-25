import React from 'react'
import '../styles/components/_slider.scss'
import Arrow from '../assets/slider-arrow.png'

function Slider(props) {

    const [currentSlide, setCurrentSlide] = React.useState(0)

    let slidesLength = props.slides.length

    function changeSlide(n) {
        if (currentSlide === slidesLength - 1 && n > 0) {
            setCurrentSlide(prevSlide => 0)
        } else if (currentSlide < 1 && n < 0) {
            setCurrentSlide(prevSlide => slidesLength -1)            
        } else {
            setCurrentSlide(prevSlide => prevSlide + n)
        }        
    }

    return (
        <div className="slider">
            <img src={Arrow}
                className='arrow arrow--left'
                onClick={() => changeSlide(-1)}
            />
            <img src={Arrow}
                className='arrow arrow--right'
                onClick={() => changeSlide(1)}
            />
            <img src={props.slides[currentSlide]} className='sliderImage' />
            <p className="indicator">{currentSlide+1}/{slidesLength}</p>
        </div>
    )
}
export default Slider