import { FC } from 'react'
import styles from './Logo.module.scss'
import { BiTask } from 'react-icons/bi'
const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<BiTask/>
			<p>TaskNova</p>
		</div>
	)
}
export default Logo
