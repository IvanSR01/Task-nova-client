import { FC, ReactNode, createContext, useEffect, useState } from 'react'

interface IThemeContext {
	theme: string
	setTheme?: (val?: any) => void
}

const defaultValue: IThemeContext = {
	theme: 'white'
}

export const ThemeContext = createContext<IThemeContext>(defaultValue)

interface IThemeProvider {
	children: ReactNode
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
	const [theme, setTheme] = useState<string>('white')
	useEffect(() => {
		document.body.setAttribute('data-theme', window.localStorage.theme)
	}, [theme])
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
export default ThemeProvider
