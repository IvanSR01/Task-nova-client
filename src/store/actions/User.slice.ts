import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '../../components/shared/interfaces/User.interface'

const initialState: IInitialState = {
	user: null
}

const UserSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload
		}
	}
})

export const { setUser } = UserSlice.actions

export default UserSlice.reducer
