import { FC } from 'react'
import styles from './Input.module.scss'
import { IInput } from './Input-interface'
import clsx from 'clsx'

const Input: FC<IInput> = ({
	placeholder,
	register,
	name,
	className,
	error,
	value,
	setValue,
	type
}) => {
	const Required = name === 'userName' ? false : 'Required'
	return (
		<div className={styles.inputGroup}>
			<input
				type={type}
				{...(register && name
					? { ...register(name, { required: Required }) }
					: '')}
				placeholder={placeholder}
				className={clsx(styles.input, className, error ? styles.error : '')}
				value={value}
				onChange={setValue}
			/>
			{error && <label>{error}</label>}
		</div>
	)
}
export default Input
