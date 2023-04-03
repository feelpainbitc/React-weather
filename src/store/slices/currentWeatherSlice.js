import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    weather: {},
    isLoading: false,
    response: {
        status:0,
        message:' ',
    },
}

export const currentWeatherSlice= createSlice({
    name:'current_weather',
    initialState,
    reducers:{
        fetchCurrentWeather(state){
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state , action){
            //state.weather = action.;
        }
    },
})