import { createSlice } from "@reduxjs/toolkit";
import { IFilter } from "../../shared/interfaces/Filter.interface";

const initialState: IFilter = {
	sortCount: 0
}

const FilterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSortCount: (state, { payload }) => {
			state.sortCount = payload
		}
	}
})

export const { setSortCount } = FilterSlice.actions

export default FilterSlice.reducer