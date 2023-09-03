import { FC, useState, useRef, useEffect } from 'react'
import styles from './Select.module.scss'
import { ISelect } from './Select-interface'
import SelectItem from './SelectItem/SelectItem'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuMotionVariants } from '../../../shared/types/motion.type'
import { useAppDispatch, useAppSelector } from '../../../hook'
import { setSortCount } from '../../../store/actions/Filter.slice'

const Select: FC<ISelect> = ({ Items }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { sortCount } = useAppSelector(state => state.Filter)
	const dispatch = useAppDispatch()
	const onClick = (i: number) => {
		dispatch(setSortCount(i))
		setIsOpen(false)
	}
	const menuRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const handleClick = (e: any) => {
			// help me I do not know which type to specify
			const path = e.path || (e.composedPath && e.composedPath())
			if (!path.includes(menuRef.current)) {
				setIsOpen(false)
			}
		}
		document.body.addEventListener('click', handleClick)
		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])
	return (
		<div className={styles.wrapper} ref={menuRef}>
			<div className={styles.heading}>
				<p>Sort by:</p>
				<h2 onClick={() => setIsOpen(!isOpen)}>{Items[sortCount].title}</h2>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={MenuMotionVariants}
						initial={'initial'}
						animate={'animate'}
						exit={'exit'}
						className={styles.menu}
					>
						{Items.map((item, i) => (
							<SelectItem
								isActive={i === sortCount ? true : false}
								onClick={() => onClick(i)}
								key={i}
								title={item.title}
								sort={item.sort}
							/>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
export default Select
