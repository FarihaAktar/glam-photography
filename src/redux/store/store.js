// import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import serviceReducer from "../reducers/serviceReducer";


// const rootReducer = combineReducers({
//     services: serviceReducer,
// })

// export const store = createStore(rootReducer, composeWithDevTools())


import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from '../services/serviceSlice'


export const store = configureStore({
    reducer: {
        services: serviceReducer,
    },
  })

