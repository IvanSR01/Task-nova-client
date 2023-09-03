import { ITask } from './Task.interface'

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
	task: ITask[]
	history: ITask[]
}

export interface IInitialState {
	user: IUser | null
}
