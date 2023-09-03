import { FC, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './QueryProvider'
import { Provider } from 'react-redux'
import store from '../store/store'
import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'

interface IMainProvider {
	children: ReactNode
}

const MainProvider: FC<IMainProvider> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryProvider>
				<BrowserRouter>
					<AuthProvider>
						<ThemeProvider>{children}</ThemeProvider>
					</AuthProvider>
				</BrowserRouter>
			</QueryProvider>
		</Provider>
	)
}
export default MainProvider
