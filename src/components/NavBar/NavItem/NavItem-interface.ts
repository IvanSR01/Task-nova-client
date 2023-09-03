import { TypeMaterialIcon } from "../../shared/types/icon.type"

export interface INavItem {
	title: string
	link: string
	icon: TypeMaterialIcon
	onClick?: () => void
}