import { combineReducers,configureStore } from "@reduxjs/toolkit";


const rootReducer= combineReducers({

})

export const store = configureStore({
    reducer: rootReducer,
})

export const RootState = typeof rootReducer;
export const AppStore = typeof store;
export const AppDispatcher = AppStore['dispatch'];