import { FC, useEffect, useState } from 'react'
import styles from './Task.module.scss'
import { ITaskUI } from './Task-interface'
import clsx from 'clsx'
import { useMutation } from '@tanstack/react-query'
import TaskService from '../../services/Task.service'
import { CircularProgress } from '@mui/material'
import { IoPencilSharp, IoRemoveCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const Task: FC<ITaskUI> = ({
	priority,
	title,
	content,
	deadline,
	isCompleted,
	_id
}) => {
	const [isComp, setIsComp] = useState<boolean | undefined>(false)
	useEffect(() => {
		if (isCompleted !== isComp) setIsComp(isCompleted)
	}, [isCompleted])
	const { mutate, isLoading } = useMutation(
		['com'],
		(_id: string) => TaskService.updateCompleted(_id),
		{
			onSuccess: () => {
				setIsComp(!isComp)
			}
		}
	)
	const onClick = () => {
		mutate(_id)
	}
	const removeOnClick = () => {
		const res = TaskService.delete(_id)
		return res
	}
	return (
		<div>
			{isLoading ? (
				<div className={styles.center}>
					<CircularProgress />
				</div>
			) : (
				<div
					data-type={isComp ? 'completed' : priority}
					className={clsx(styles.wrapper, isComp ? styles.isCompleted : '')}
				>
					<h2 onClick={onClick}>{title}</h2>
					<p>{content}</p>
					<div className={styles.header}>
						<div>deadLine - {deadline}</div>
						<Link to={isCompleted ? '' : `/update/${_id}`}>
							<IoPencilSharp />
						</Link>
						<IoRemoveCircle onClick={() => removeOnClick()} />
					</div>
				</div>
			)}
		</div>
	)
}
export default Task
