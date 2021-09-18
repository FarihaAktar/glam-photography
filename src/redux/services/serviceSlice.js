import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: [],
    singleService: []
}

export const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        addServices: (state, { payload }) => {
            state.services = payload
        },
        addSingleService: (state, { payload }) => {
            state.singleService = payload
        }
    }
})

export const { addServices, addSingleService } = serviceSlice.actions;
export const loadServices = (state) => state.services.services;
export default serviceSlice.reducer;