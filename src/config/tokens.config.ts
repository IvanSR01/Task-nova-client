import { ITokens } from '../components/shared/interfaces/User.interface'
import Cookies from 'js-cookie'

export const saveNewToken = ({ accessToken, refreshToken }: ITokens) => {
	Cookies.set('access-token', accessToken)
	Cookies.set('refresh-token', refreshToken)
}

export const getToken = () => {
	return {
		accessToken: Cookies.get('access-token'),
		refreshToken: Cookies.get('refresh-token')
	}
}

export const removeToken = () => {
	Cookies.remove('access-token')
	Cookies.remove('refresh-token')
}
