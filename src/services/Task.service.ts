import instance from '../config/axios.config'
import { ITask, IAllTask } from '../shared/interfaces/Task.interface'
import { TypeCreateTask } from '../shared/types/CreateTask.type'

const TASK = '/task/'

class TaskService {

	async getAll(){
		const { data } = await instance<IAllTask | undefined>({
			url: `${TASK}all`,
			method:'get'
		})
		return data
	}

	async getById(id: string) {
		return await instance<ITask>({
			url: `${TASK}${id}`,
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
	async update({ taskId, title, content, priority, deadline }: TypeCreateTask) {
		return await instance<ITask>({
			url: `${TASK}`,
			method: 'put',
			data: {
				taskId,
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
