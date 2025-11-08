import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from "../feactures/counter/mycounterSlice"

 export const store = configureStore({
    reducer:{
        counter: counterReducer,
    },
 });