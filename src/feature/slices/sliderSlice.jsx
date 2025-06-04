import { createSlice } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
    nane : 'slider',
    initialState: {
        value: 0,
        length: 4,
    },
    reducers: {
        nextSlide(state, action) {
            console.log('action',action)
            console.log('state',state)
            state.value = action.payload > state.length ? 0 : action.payload;
        },
        prevSlide() {},
        dotSlide() {},
    }
})

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;