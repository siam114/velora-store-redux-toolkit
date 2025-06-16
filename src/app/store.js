
import sliderSlice from '../feature/slices/sliderSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        slider: sliderSlice,
    },
})

export default store;