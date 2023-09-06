import { TypeSort } from '../../shared/types/Sort.type'
import { IAllTask, ITask } from '../../shared/interfaces/Task.interface'
import { useQuery } from '@tanstack/react-query'
import TaskService from '../../services/Task.service'
const useGetTask = (sort: TypeSort, search: string) => {
	const { data, isLoading } = useQuery(['AllTask'], () => TaskService.getAll())

	if (!data) return

	const tasks = useSearchFilter(search, data?.task)


	const AllTask: IAllTask = {
		task: useFilterTask(sort, tasks),
		history: data.history,
	}

	return AllTask
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
