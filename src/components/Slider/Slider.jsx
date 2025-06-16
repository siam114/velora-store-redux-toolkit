import React from 'react'
// import { nextSlide, prevSlide, dotSlide } from '../../feature/slices/sliderSlice'
import { useSelector } from 'react-redux';

const Slider = () => {
  const slideIndex = useSelector((state)=>state.slider.value);
  console.log('slideIndex', slideIndex)
  return (
    <div>
     <button>next</button>
     <button>prev</button>
    </div>
  )
}

export default Slider
