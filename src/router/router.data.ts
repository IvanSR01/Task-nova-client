import { FC } from 'react'
import Home from '../pages/Home/Home'
import SingIn from '../pages/Sing In/SingIn'
import SingUp from '../pages/Sing Up/SingUp'
import User from '../pages/Us/User/User'
import Add from '../pages/Task/Add/Add'
import UpdateUser from '../pages/Us/UpdateUser/UpdateUser'
import Update from '../pages/Task/Update/Update'

export type TypeRouterData = {
	path: string
	element: FC
}

const RouterData: TypeRouterData[] = [
	{
		path: '/',
		element: Home
	},
	{
		path: '/singIn',
		element: SingIn
	},
	{
		path: '/singUp',
		element: SingUp
	},
	{
		path: '/user',
		element: User
	},
	{
		path: '/user/update',
		element: UpdateUser
	},
	{
		path: '/add',
		element: Add
	},
	{
		path: '/update/:id',
		element: Update
	}

]

export default RouterData
