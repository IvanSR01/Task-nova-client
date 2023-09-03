import { FC } from 'react'
import styles from './NavBar.module.scss'
import NavItem from './NavItem/NavItem'
import { NavData } from './NavData'

const NavBar: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.items}>
				{NavData.map((item, i) => (
					<NavItem
						key={i}
						link={item.link}
						title={item.title}
						icon={item.icon}
					/>
				))}
			</div>
		</div>
	)
}
export default NavBar
