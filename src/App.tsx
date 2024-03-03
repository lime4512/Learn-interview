import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/header/Header'
import { Home } from './pages/home/Home'
import { LearnTech } from './pages/learntech/LearnTech'
import { Questions } from './pages/questions/Questions'
import { Tests } from './pages/tests/Tests'
import { Container } from './components/container/Container'
import { BackLearn } from './pages/backLearn/BackLearn'
import { FrontLearn } from './pages/frontLearn/FrontLearn'
import { JuniorPage } from './pages/frontLearn/junior/JuniorPage'
import { MiddlePage } from './pages/frontLearn/middle/MiddlePage'
import { SeniorPage } from './pages/frontLearn/senior/SeniorPage'
import { Junior1 } from './pages/frontLearn/junior/junior-1/Junior-1'
import { Junior2 } from './pages/frontLearn/junior/junior-2/Junior-2'
import { Junior3 } from './pages/frontLearn/junior/junior-3/Junior-3'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/learntech' element={<LearnTech />} />
					<Route path='/questions' element={<Questions />} />
					<Route path='/tests' element={<Tests />} />
					<Route path='/learntech/backlearn' element={<BackLearn />} />
					<Route path='/learntech/frontlearn' element={<FrontLearn />} />
					<Route path='/learntech/frontlearn/junior' element={<JuniorPage />} />
					<Route
						path='/learntech/frontlearn/junior/level-1'
						element={<Junior1 />}
					/>

					<Route
						path='/learntech/frontlearn/junior/level-2'
						element={<Junior2 />}
					/>
					<Route
						path='/learntech/frontlearn/junior/level-3'
						element={<Junior3 />}
					/>
					<Route path='/learntech/frontlearn/middle' element={<MiddlePage />} />
					<Route path='/learntech/frontlearn/senior' element={<SeniorPage />} />
				</Routes>
			</Container>
		</BrowserRouter>
	)
}

export default App
