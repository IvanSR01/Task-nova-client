import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

interface IQueryProvider {
	children: ReactNode
}

const client = new QueryClient()

const QueryProvider: FC<IQueryProvider> = ({ children }) => {
	return (
			<QueryClientProvider client={client}>
				{children}
			</QueryClientProvider>
		)
}
export default QueryProvider