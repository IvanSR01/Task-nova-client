import ReactDOM from 'react-dom/client'
import MainProvider from './providers/MainProvider.tsx'
import './assets/global.scss'
import Router from './router/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<MainProvider>
		<Router/>
	</MainProvider>
)
