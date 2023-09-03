import { FC, MouseEvent } from 'react'
import styles from './Button.module.scss'
import { IButton } from './Button-interface'
import clsx from 'clsx'

const Button: FC<IButton> = ({ children, type, className, onClick }) => {
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		if (!onClick) return
		return onClick && onClick(e)
	}
	return (
		<button
			type={type ? type : 'button'}
			className={clsx(styles.button, className)}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}
export default Button
