import { FC, useState } from 'react'
import styles from './SingIn.module.scss'
import { Button, Input } from '../../components'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { IAuth } from '../../shared/interfaces/Auth.interface'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../services/Auth.service'
import { useAppDispatch, useError } from '../../hook'
import AuthMessage from '../../components/AuthMessage/AuthMessage'
import { setUser } from '../../store/actions/User.slice'
import NewButton from '../../components/Ui/NewButton/NewButton'
const SingIn: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm<IAuth>({ mode: 'onChange' })
	const dispatch = useAppDispatch()
	const { mutate, isLoading } = useMutation(
		['auth'],
		({ dataLogin, password }: IAuth) =>
			AuthService.main({ dataLogin, password, type: 'login' }),
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
					<h2>Sing In</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							register={register}
							name='dataLogin'
							error={errors.dataLogin?.message}
							placeholder='Login'
						/>
						<Input
							register={register}
							name='password'
							error={errors.password?.message}
							placeholder='Password'
						/>
						<Button type='submit'>Sing in</Button>
					</form>
					<Link style={{ textDecoration: 'none' }} to='/singUp'>
						<p>Or Sing Up</p>
					</Link>
				</div>
			)}
		</div>
	)
}
export default SingIn
