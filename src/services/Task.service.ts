import instance from '../config/axios.config'
import { ITask } from '../shared/interfaces/Task.interface'
import { TypeCreateTask } from '../shared/types/CreateTask.type'

const TASK = '/task/'

class TaskService {
	async getById(id: string) {
		return await instance<ITask>({
			url: `${TASK}`,
			params: {
				id
			},
			method: 'get'
		})
	}
	async create({ title, content, priority, deadline }: TypeCreateTask) {
		return await instance<ITask>({
			url: `${TASK}`,
			method: 'post',
			data: {
				title,
				content,
				priority,
				deadline
			}
		})
	}
	async update({ title, content, priority, deadline }: TypeCreateTask) {
		return await instance<ITask>({
			url: `${TASK}`,
			method: 'put',
			data: {
				title,
				content,
				priority,
				deadline
			}
		})
	}
	async updateCompleted(taskId: string) {
		return await instance<ITask>({
			url: `${TASK}completed`,
			method: 'put',
			data: {
				taskId
			}
		})
	}
	async delete(taskId: string) {
		return await instance<ITask>({
			url: `${TASK}`,
			method: 'delete',
			data: {
				taskId
			}
		})
	}
}

export default new TaskService()
