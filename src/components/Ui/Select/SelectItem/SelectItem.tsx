import { FC } from 'react'
import styles from './SelectItem.module.scss'
import { ISelectItem } from './SelectItem-interface'
import clsx from 'clsx'

const SelectItem: FC<ISelectItem> = ({ title, isActive, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={clsx(styles.wrapper, isActive ? styles.active : '')}
		>
			{title}
		</div>
	)
}
export default SelectItem
