export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IUser extends ITokens {
	email: string
	userName?: string
	img: string
	target: string
	days: number
}

export interface IInitialState {
	user: IUser | null
}

export interface IUserUpdate {
	email?: string
	userName?: string
	img?: string
	target?: string
}
