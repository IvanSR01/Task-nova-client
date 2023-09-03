import { FC } from 'react'
import styles from './AuthMessage.module.scss'
import { CircularProgress } from '@mui/material'
import { Button } from '..'
interface IAuthMessage {
	isLoading: boolean
	setMessage: () => void
	message: string
}

const AuthMessage: FC<IAuthMessage> = ({ isLoading, message, setMessage }) => {
	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<CircularProgress />
			) : (
				<div>
					<h2>{message}</h2>
					<Button onClick={setMessage}>RESET</Button>
				</div>
			)}
		</div>
	)
}
export default AuthMessage
