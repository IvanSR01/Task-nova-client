import { FC, useState } from 'react'
import styles from '../Sing In/SingIn.module.scss'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useError } from '../../hook'
import { useMutation } from '@tanstack/react-query'
import { IAuth } from '../../components/shared/interfaces/Auth.interface'
import AuthService from '../../services/Auth.service'
import { setUser } from '../../store/actions/User.slice'
import { Link } from 'react-router-dom'
import AuthMessage from '../../components/AuthMessage/AuthMessage'
import { Button, Input } from '../../components'

const SingUp: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<IAuth>({ mode: 'onChange' })
	const dispatch = useAppDispatch()
	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, userName, password }: IAuth) =>
			AuthService.main({ email, userName, password, type: 'register' }),
		{
			onSuccess: data => {
				dispatch(setUser(data))
			},
			onError: (err: any) => {
				const res = useError(err)
				setMessage(res)
				reset()
			}
		}
	)
	const [message, setMessage] = useState('')
	const onSubmit = (data: IAuth) => {
		mutate(data)
	}
	return (
			<div className={styles.wrapper}>
			{isLoading || message ? (
				<AuthMessage
					isLoading={isLoading}
					message={message}
					setMessage={() => setMessage('')}
				/>
			) : (
				<div className={styles.content}>
					<h2>Sing Up</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							register={register}
							name='email'
							error={errors.email?.message}
							placeholder='Email'
						/>
							<Input
							register={register}
							name='userName'
							error={errors.userName?.message}
							placeholder='Username'
						/>
						<Input
							register={register}
							name='password'
							error={errors.password?.message}
							placeholder='Password'
						/>
						<Button type='submit'>Sing up</Button>
					</form>
					<Link style={{ textDecoration: 'none' }} to='/singIn'>
						<p>Or Sing In</p>
					</Link>
				</div>
			)}
		</div>
		)
}
export default SingUp