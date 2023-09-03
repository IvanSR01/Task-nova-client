import { FC } from 'react'
import Home from '../pages/Home/Home'
import SingIn from '../pages/Sing In/SingIn'
import SingUp from '../pages/Sing Up/SingUp'
import User from '../pages/User/User'
import Add from '../pages/Add/Add'

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
		path: '/add',
		element: Add
	}
]

export default RouterData
