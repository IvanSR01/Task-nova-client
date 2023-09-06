import instance from '../config/axios.config'
import { getToken } from '../config/tokens.config'
import { IUser, IUserUpdate } from '../shared/interfaces/User.interface'

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

	async updateProfile({ userName, img, email, target }: IUserUpdate) {
		return await instance<IUser>({
			url: `${USERS}update`,
			method: 'put',
			data: {
				userName,
				img,
				email,
				target
			}
		})
	}
}
export default new UserService()
