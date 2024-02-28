import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/header/Header'
import { Home } from './pages/home/Home'
import { LearnTech } from './pages/learntech/LearnTech'
import { Questions } from './pages/questions/Questions'
import { Tests } from './pages/tests/Tests'
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
