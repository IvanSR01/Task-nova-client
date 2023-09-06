export interface ITask {
	_id: string

	title: string

	content: string

	priority: string

	isCompleted: boolean

	deadline: string
}
export interface IAllTask {
	task: ITask[]
	history: ITask[]
}