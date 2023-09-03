import axios from 'axios'
import { API_URL } from './constance.config'
import { getToken, removeToken } from './tokens.config'
import { useError } from '../hook'
import AuthService from '../services/Auth.service'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

instance.interceptors.request.use(config => {
	const { accessToken } = getToken()
	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instance.interceptors.request.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === '401' ||
				useError(error) === 'jwt expired' ||
				useError(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isReply
		) {
			originalRequest._isReply = true

			try {
				await AuthService.getNewTokens()


				return instance.request(originalRequest)
			} catch (error) {
				if (useError(error) === 'jwt expired'){}
			}
		}
		throw error
	}
)

export default instance