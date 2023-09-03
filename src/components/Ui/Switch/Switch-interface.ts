import { TypeSideSwitch } from "../../SideBar/Sidedata";

export interface ISwitch {
	item: TypeSideSwitch,
	active?: boolean,
	setCount?: () => void
}