import { useAppSelector } from '..'
import { TypeSort } from '../../shared/types/Sort.type'
import { ITask } from '../../shared/interfaces/Task.interface'
const useGetTask = (sort: TypeSort, search: string) => {
	const user = useAppSelector(state => state.User.user)

	if (!user) return

	const tasks = useSearchFilter(search, user?.task)

	return useFilterTask(sort, tasks)
}

const useFilterTask = (sort: TypeSort, task: ITask[]) => {
	if (task ? task.length : false) {
		if (sort) {
			const sortArray = [...task]
			const tasks = sortArray.sort((a, b) => a[sort].localeCompare(b[sort]))
			return tasks
		}
		return task
	}
	return []
}

export default useGetTask

const useSearchFilter = (search: string, tasks: ITask[]) => {
	if (search) {
		const task = tasks.filter(item => {
			return item.title.toLowerCase().includes(search.toLowerCase())
		})
		return task
	}
	return tasks
}
