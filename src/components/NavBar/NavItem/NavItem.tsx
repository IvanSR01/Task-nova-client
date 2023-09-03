import { FC } from 'react'
import styles from './NavItem.module.scss'
import { INavItem } from './NavItem-interface'
import { Link, useLocation } from 'react-router-dom'
import * as MaterialIcon from 'react-icons/ai'
import clsx from 'clsx'
const NavItem: FC<INavItem> = ({ title, icon, link, onClick }) => {
	const Icon = MaterialIcon[icon]
	const { pathname } = useLocation()
	return (
		<Link style={{ textDecoration: 'none' }} to={link} onClick={onClick}>
			<div
				className={clsx(styles.wrapper, pathname === link ? styles.active : '')}
			>
				<Icon />
				<p>{title}</p>
			</div>
		</Link>
	)
}
export default NavItem
