import { FC, useState } from 'react'
import styles from './Home.module.scss'
import { Fab } from '@mui/material'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { Input, Select, Task, Layout } from '../../components'
import items from './SortData'
import { ITask } from '../../shared/interfaces/Task.interface'
import { useAppSelector, useGetTask } from '../../hook'
const Home: FC = () => {
	const [value, setValue] = useState('')
	const sortCount = useAppSelector(state => state.Filter.sortCount)
	const Tasks = useGetTask(items[sortCount].sort, value)
	const user = useAppSelector(state => state.User.user)
	console.log(Tasks)
	return (
		<Layout title='TaskNova | Home'>
			<div className={styles.wrapper}>
				<header>
					<Input
						value={value}
						setValue={e => setValue(e.target.value)}
						className={styles.input}
						placeholder='Search...'
					/>
					<Select Items={items} />
				</header>
				<div className={styles.items}>
					{Tasks && Tasks.length ? (
						Tasks.map((item: ITask, i: number) => <Task key={i} {...item} />)
					) : (
						<h2 className={styles.h2}>There are no tasks</h2>
					)}
				</div>
				{user?.history && user?.history.length ? (
					<>
						<div className={styles.hist}>History</div>
						<div className={styles.items}>
							{user.history.map((item: ITask, i: number) => (
								<Task key={i} {...item} />
							))}
						</div>
					</>
				) : (
					<></>
				)}
				<div className={styles.add}>
					<Link to='/add'>
						<Fab aria-label='add'>
							<GrAdd />
						</Fab>
					</Link>
				</div>
			</div>
		</Layout>
	)
}
export default Home
