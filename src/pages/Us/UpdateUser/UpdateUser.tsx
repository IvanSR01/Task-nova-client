import { FC, useRef, useState } from 'react'
import styles from './UpdateUser.module.scss'
import { Button, Input, Layout } from '../../../components'
import { useMutation } from '@tanstack/react-query'
import UserService from '../../../services/User.service'
import { IUserUpdate } from '../../../shared/interfaces/User.interface'
import { HTMLInputEvent } from './Intrface'
import { useError } from '../../../hook'
import instance from '../../../config/axios.config'
import { UPLOADS_URL } from '../../../config/constance.config'
import { CircularProgress } from '@mui/material'

const UpdateUser: FC = () => {
	const { mutate, isLoading } = useMutation(
		['Update'],
		({ userName, img, email, target }: IUserUpdate) =>
			UserService.updateProfile({ userName, img, email, target }),
		{
			onSuccess: () => {
				setFiles({ ...files, userName: '', email: '', target: '' })
			},
			onError: err => {
				console.log(useError(err))
			}
		}
	)
	const [files, setFiles] = useState<IUserUpdate>({})
	const inputRef = useRef<HTMLInputElement>(null)
	const onClickImg = async (e: HTMLInputEvent) => {
		try {
			const formData = new FormData()
			if (!e.target.files) return
			inputRef.current?.click()
			let file: any = e.target.files[0]
			formData.append('file', file)
			const { data } = await instance.post('files?folder=avatar', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			setFiles({ ...files, img: data[0].url })
		} catch (error) {
			console.log(useError(error))
		}
	}
	const onClickRemoveImg = () => {
		setFiles({ ...files, img: '' })
	}
	const onClickUpdate = () => {
		mutate({ ...files })
	}
	return (
		<Layout title='TaskNova | UpdateUser'>
			<div className={styles.wrapper}>
				{isLoading ? (
					<div className={styles.center}>
						<CircularProgress />
					</div>
				) : (
					<div className={styles.content}>
						<h2>Update</h2>
						<form>
							<input
								ref={inputRef}
								onChange={(e: any) => onClickImg(e)}
								type='file'
								hidden
							/>
							{files.img ? (
								<div className={styles.img}>
									<img src={`${UPLOADS_URL}${files.img}`} />
									<Button onClick={() => onClickRemoveImg()}>Delete img</Button>
								</div>
							) : (
								<Button onClick={() => inputRef.current?.click()}>
									Update Img
								</Button>
							)}
							<Input
								placeholder='Username'
								value={files.userName}
								setValue={e => setFiles({ ...files, userName: e.target.value })}
							/>
							<Input
								placeholder='Email'
								value={files.email}
								setValue={e => setFiles({ ...files, email: e.target.value })}
							/>
							<Input
								placeholder='Target'
								value={files.target}
								setValue={e => setFiles({ ...files, target: e.target.value })}
							/>
							<Button onClick={() => onClickUpdate()}>Update</Button>
						</form>
					</div>
				)}
			</div>
		</Layout>
	)
}
export default UpdateUser
