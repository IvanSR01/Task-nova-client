import { TypeSort } from "../../../../shared/types/Sort.type"

export interface ISelectItem {
	title: string
	sort: TypeSort
	isActive?: boolean
	onClick?: (i: any) => void
}
