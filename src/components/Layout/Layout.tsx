import { FC, ReactNode, useEffect } from 'react'
import { SideBar } from '..'
import styles from './Layout.module.scss'
interface ILayout {
	children: ReactNode
	title: string
}

const Layout: FC<ILayout> = ({ children, title }) => {
	useEffect(() => {
		document.title = title
	}, [])
	return (
		<div className={styles.wrapper}>
			<SideBar />
			{children}
		</div>
	)
}
export default Layout
