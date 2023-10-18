import { configureStore } from '@reduxjs/toolkit'
import homeSliceReducer from '../Components/Layout/Home/homeSLice'
import outputSliceReducer from '../Components/Layout/Home/outputSlice'

export const store = configureStore({
    reducer: {
        homeSlice: homeSliceReducer,
        outputSlice: outputSliceReducer,
    }
})