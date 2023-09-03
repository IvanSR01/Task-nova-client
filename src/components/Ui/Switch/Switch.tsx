import { FC } from 'react'
import styles from './Switch.module.scss'
import { ISwitch } from './Switch-interface'
import * as MaterialIcon from 'react-icons/bs'
import clsx from 'clsx'
const Switch: FC<ISwitch> = ({ item, active, setCount }) => {
	const Icon = MaterialIcon[item.icon]
	return (
		<li onClick={setCount} className={clsx(styles.wrapper, active ? styles.active : '')}>
			<Icon/>
			<p>{item.title}</p>
		</li>
	)
}
export default Switch
