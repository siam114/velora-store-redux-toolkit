import { createSlice } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
    nane : 'slider',
    initialState: {
        value: 0,
        length: 4,
    },
    reducers: {
        nextSlide() {},
        prevSlide() {},
        dotSlide() {},
    }
})

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;