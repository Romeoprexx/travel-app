import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Slices/weatherSlices";
const store = configureStore({
  reducer: {
     weather: weatherReducer
  }
});
export default store;