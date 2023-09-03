import { FC, useState, useContext, useEffect } from 'react'
import styles from './SideBar.module.scss'
import Logo from './Logo/Logo'
import NavBar from '../NavBar/NavBar'
import { useAppDispatch, useAppSelector } from '../../hook'
import SideSwitchData, { TypeSideSwitch } from './Sidedata'
import Switch from '../Ui/Switch/Switch'
import { ThemeContext } from '../../providers/ThemeProvider'
import NavItem from '../NavBar/NavItem/NavItem'
import { setUser } from '../../store/actions/User.slice'
import { removeToken } from '../../config/tokens.config'
const SideBar: FC = () => {
	const { user } = useAppSelector(state => state.User)
	const { setTheme } = useContext(ThemeContext)
	const [count, setCount] = useState(0)
	const theme = window.localStorage.theme
	useEffect(() => {
		if (theme == 'white') {
			setCount(0)
		} else {
			setCount(1)
		}
	})
	const onClick = () => {
		if (theme == 'dark') {
			setCount(0)
			window.localStorage.setItem('theme', 'white')
			return setTheme ? setTheme('white') : ''
		}
		setCount(1)
		window.localStorage.setItem('theme', 'dark')
		return setTheme ? setTheme('dark') : ''
	}
	const dispatch = useAppDispatch()

	const logout = () => {
		const res = confirm('Do you really want to log out of your account')
		if (res) {
			dispatch(setUser(null))
			removeToken()
		}
		return
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<NavBar />
			<div className={styles.target}>
				<p>{user?.target}</p>
			</div>
			<ul>
				{SideSwitchData.map((item: TypeSideSwitch, i: number) => (
					<Switch
						setCount={() => onClick()}
						item={item}
						key={i}
						active={count === i ? true : false}
					/>
				))}
			</ul>
			<div className={styles.log}>
				<NavItem
					onClick={logout}
					link='/'
					title='LOGOUT'
					icon='AiOutlineLogout'
				/>
			</div>
		</div>
	)
}
export default SideBar
