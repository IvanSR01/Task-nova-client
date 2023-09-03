import instance from '../config/axios.config'
import { getToken } from '../config/tokens.config'
import { IUser } from '../shared/interfaces/User.interface'

const USERS = '/users/'

class UserService {
	async getProfile() {
		const { accessToken } = getToken()
		if (accessToken) {
			return await instance<IUser>({
				url: `${USERS}profile`,
				method: 'get'
			})
		}
		return null
	}
}
export default new UserService()
