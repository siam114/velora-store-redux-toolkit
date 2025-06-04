import React from 'react'
import { nextSlide, prevSlide, dotSlide } from '../../feature/slices/sliderSlice'
import { useDispatch, useSelector } from 'react-redux'

const Slider = () => {
  return (
    <div>
     <button>next</button>
     <button>prev</button>
    </div>
  )
}

export default Slider
