import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    outputsInWeek: [],
    outputsInWeekend: [],
    outputsInWeekFromSumgait: [],
    outputsInWeekendFromSumgait: [],
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
        },
        getOutputsInWeekFromSumgait: (state, action) => {
            state.outputsInWeekFromSumgait = action.payload
        },
        getOutputsInWeekendFromSumgait: (state, action) => {
            state.outputsInWeekendFromSumgait = action.payload
        }
    }
})

export const { getOutputInWeekList,
    getOutputInWeekendList,
    getStationList,
    setIsWeekend,
    getOutputsInWeekFromSumgait,
    getOutputsInWeekendFromSumgait
} = outputSlice.actions
export default outputSlice.reducer