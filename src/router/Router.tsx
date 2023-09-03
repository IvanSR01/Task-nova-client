import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import RouterData, { TypeRouterData } from './router.data'
const Router: FC = () => {
	return (
		<Routes>
			{RouterData.map((item: TypeRouterData, i: number) => (
				<Route key={i} path={item.path} element={<item.element />} />
			))}
		</Routes>
	)
}
export default Router
