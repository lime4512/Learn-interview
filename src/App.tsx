import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/header/Header'
import { Home } from './pages/Home'
import { LearnTech } from './pages/LearnTech'
import { Questions } from './pages/Questions'
import { Tests } from './pages/Tests'
import { Container } from './components/container/Container'
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/learnTech' element={<LearnTech />} />
					<Route path='/questions' element={<Questions />} />
					<Route path='/tests' element={<Tests />} />
				</Routes>
			</Container>
		</BrowserRouter>
	)
}

export default App
