export type TypeMotion = {
	initial: TypeVariant
	animate: TypeVariant
	exit: TypeVariant
}
type TypeVariant = {
	opacity?: number | string
	x?: string
	y?:string
}

export const MenuMotionVariants: TypeMotion = {
	initial: {
		opacity: 0,
		x: '-100px'
	},
	animate: {
		opacity: 1,
		x: '00px'
	},
	exit: {
		opacity: 0,
		x: '-100px'
	}
}
