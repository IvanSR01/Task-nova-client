import * as MaterialIcon from 'react-icons/bs'

type TypeMaterialIconBs = keyof typeof MaterialIcon

export type TypeSideSwitch = {
	title: string
	icon: TypeMaterialIconBs
}
const SideSwitchData: TypeSideSwitch[] = [
	{
		title: 'Light',
		icon: 'BsSunFill'
	},
	{
		title: 'Dark',
		icon: 'BsFillMoonFill'
	}
]

export default SideSwitchData