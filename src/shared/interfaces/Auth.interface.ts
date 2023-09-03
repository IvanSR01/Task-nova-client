export interface IAuth {
	dataLogin?: string
	email?: string
	userName?: string
	password: string
	type: 'login' | 'register'
}