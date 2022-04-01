
/*
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid={fce8ce03f084f6807793dcf6eeeefc49}`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

slice

const initialState = {
    weather: [],
    
}


const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeather:(state, {payload}) => {
        state.attractions = payload;
    }
  }
    
});

export default weatherSlice.reducer;
*/