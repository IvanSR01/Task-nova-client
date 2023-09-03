import { $axios } from '../config/axios.config'
import { getToken, saveNewToken } from '../config/tokens.config'
import { IAuth } from '../shared/interfaces/Auth.interface'
import { ITokens, IUser } from '../shared/interfaces/User.interface'

const AUTH = '/auth/'

class AuthService {
	async main(props: IAuth): Promise<IUser> {
		const { data } = await $axios<IUser>({
			url: `${AUTH}${props.type}`,
			method: 'post',
			data: {
				...props
			}
		})
		if (data.accessToken) {
			saveNewToken({
				accessToken: data.accessToken,
				refreshToken: data.refreshToken
			})
		}
		return data
	}

	async getNewTokens() {
		const { refreshToken } = getToken()
		const { data } = await $axios<ITokens>({
			url: `${AUTH}login/access-token`,
			method: 'post',
			data: {
				refreshToken
			}
		})
		console.log(data)
		return saveNewToken(data)
	}
}
export default new AuthService()
