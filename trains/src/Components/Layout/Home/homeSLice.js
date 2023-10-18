import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    relsType: [],
    selectedRelsType: "",
    trajectoryOnAbsheron: [],
    selectedDirection: "",
    from: [{ name: "BAKIDAN", id: 1 }, { name: "SUMQAYITDAN", id: 2 }],
    selectedFrom: "",
}
export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getRelsType: (state, action) => {
            state.relsType = action.payload
        },
        setSelectedRelsType: (state, action) => {
            state.selectedRelsType = action.payload
        },
        getTrajectoryOnAbsheron: (state, action) => {
            state.trajectoryOnAbsheron = action.payload
        },
        setSelectedDirection: (state, action) => {
            state.selectedDirection = action.payload
        },
        setSelectedFrom: (state, action) => {
            state.selectedFrom = action.payload
        }
    }
})
export const { getRelsType,
    getTrajectoryOnAbsheron,
    setSelectedRelsType,
    setSelectedFrom,
    setSelectedDirection
} = homeSlice.actions
export default homeSlice.reducer