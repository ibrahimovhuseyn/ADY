import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    outputsInWeek: [],
    outputsInWeekend: [],
    stations: [],
    isWeekend: false
}
const outputSlice = createSlice({
    name: "output",
    initialState,
    reducers: {
        getOutputInWeekList: (state, action) => {
            state.outputsInWeek = action.payload
        },

        getOutputInWeekendList: (state, action) => {
            state.outputsInWeekend = action.payload
        },
        getStationList: (state, action) => {
            state.stations = action.payload
        },
        setIsWeekend: (state) => {
            state.isWeekend = !state.isWeekend
        }
    }
})

export const { getOutputInWeekList,
    getOutputInWeekendList,
    getStationList,
    setIsWeekend
} = outputSlice.actions
export default outputSlice.reducer