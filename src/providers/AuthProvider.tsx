import { FC, ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hook'
import { useQuery } from '@tanstack/react-query'
import UserService from '../services/User.service'
import { setUser } from '../store/actions/User.slice'
import { removeToken } from '../config/tokens.config'

interface IAuthProvider {
	children: ReactNode
}

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
	const dispatch = useAppDispatch()
	useQuery(['user'], () => UserService.getProfile(), {
		onSuccess: res => {
			dispatch(setUser(res?.data))
		}
	})
	const nav = useNavigate()
	const { pathname } = useLocation()
	const isAuth = useAppSelector(state => Boolean(state.User.user))
	useEffect(() => {
		if (
			!isAuth &&
			pathname !== '/singIn' &&
			!isAuth &&
			pathname !== '/singUp'
		) {
			nav('/singIn')
		}
		if (
			(isAuth && pathname === '/singIn') ||
			(isAuth && pathname === '/singUp')
		) {
			nav('/')
		}
	}, [isAuth, pathname])
	return <>{children}</>
}
export default AuthProvider


