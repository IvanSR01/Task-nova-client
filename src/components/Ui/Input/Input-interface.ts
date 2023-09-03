import { UseFormRegister } from 'react-hook-form'
import { IAuth } from '../../../shared/interfaces/Auth.interface'

export interface IInput {
	register?: UseFormRegister<IAuth>
	name?: 'userName' | 'email' | 'password' | 'dataLogin'
	placeholder: string
	className?: string
	error?: string
	value?: string
	setValue?: (val?: any) => void
	type?: string
}
