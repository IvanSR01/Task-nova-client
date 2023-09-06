import { FC } from 'react'
import styles from './User.module.scss'
import Layout from '../../../components/Layout/Layout'
import { useAppSelector } from '../../../hook'
import { UPLOADS_URL } from '../../../config/constance.config'
import { Task } from '../../../components'
import { ITask } from '../../../shared/interfaces/Task.interface'
import { useQuery } from '@tanstack/react-query'
import TaskService from '../../../services/Task.service'
import { Link } from 'react-router-dom'
import { Fab } from '@mui/material'
import { IoPencilSharp } from 'react-icons/io5'

const User: FC = () => {
	const user = useAppSelector(state => state.User.user)
	const { data } = useQuery(['allTask'], () => TaskService.getAll())
	return (
		<Layout title='TaskNova | User'>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.img}>
						<img src={`${UPLOADS_URL}${user?.img}`} alt='' />
					</div>
					<div className={styles.options}>
						<div>
							<p>completed</p>
							<span>{user?.history.length}</span>
						</div>
						<div>
							<p>service days</p>
							<span>{user?.days}</span>
						</div>
					</div>
				</div>
				<div className={styles.items}>
					{data?.history && data?.history.length ? (
						<>
							<div className={styles.hist}>History</div>
							<div className={styles.items}>
								{data?.history.map((item: ITask, i: number) => (
									<Task key={i} {...item} />
								))}
							</div>
						</>
					) : (
						<div className={styles.notArr}></div>
					)}
				</div>
				<div className={styles.add}>
					<Link to='/user/update'>
						<Fab aria-label='add'>
							<IoPencilSharp />
						</Fab>
					</Link>
				</div>
			</div>
		</Layout>
	)
}
export default User
