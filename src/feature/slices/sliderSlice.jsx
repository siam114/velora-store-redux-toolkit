import { createSlice, configureStore  } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
    nane : 'slider',
    initialState: {
        value: 0,
    },
})