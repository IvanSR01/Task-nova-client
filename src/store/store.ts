import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./actions/User.slice";
import FilterSlice from "./actions/Filter.slice";



const store = configureStore({
	reducer: {
		User: UserSlice,
		Filter: FilterSlice
	}
})


export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store