import { FC, useState } from 'react'
import styles from './Add.module.scss'
import Layout from '../../../components/Layout/Layout'
import { Button, Input, Task } from '../../../components'
import { TypeCreateTask } from '../../../shared/types/CreateTask.type'
import { useMutation } from '@tanstack/react-query'
import TaskService from '../../../services/Task.service'
import { useError } from '../../../hook'
import { CircularProgress } from '@mui/material'

const Add: FC = () => {
	const [files, setFiles] = useState<TypeCreateTask>({
		title: '',
		content: '',
		priority: '',
		deadline: ''
	})
	const { mutate, isLoading } = useMutation(
		['create'],
		({ title, content, priority, deadline }: TypeCreateTask) =>
			TaskService.create({ title, content, priority, deadline }),
		{
			onError: (err: any) => {
				const res = useError(err)
				console.log(res)
			},
			onSuccess: () => {
				setFiles({
					...files,
					title: '',
					content: '',
					priority: '',
					deadline: ''
				})
			}
		}
	)
	const onClickCreate = () => {
		mutate(files)
	}
	return (
		<Layout title='TaskNova | Add'>
			{isLoading ? (
				<div className={styles.center}>
					<CircularProgress />
				</div>
			) : (
				<>
					<div className={styles.wrapper}>
						<div className={styles.row__one}>
							<Input
								placeholder='Title'
								value={files.title}
								setValue={e => setFiles({ ...files, title: e.target.value })}
							/>
							<Input
								placeholder='Content'
								value={files.content}
								setValue={e => setFiles({ ...files, content: e.target.value })}
							/>
							<Input
								placeholder='Priority - low | middle | high'
								value={files.priority}
								setValue={e => setFiles({ ...files, priority: e.target.value })}
							/>
							<Input
								placeholder='Deadline'
								type='date'
								value={files.deadline}
								setValue={e => setFiles({ ...files, deadline: e.target.value })}
							/>
							<Button onClick={onClickCreate}>ADD</Button>
						</div>
						<div className={styles.row__two}>
							<Task _id='' {...files} />
						</div>
					</div>
				</>
			)}
		</Layout>
	)
}
export default Add
