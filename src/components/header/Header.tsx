import { NavBar } from '../navbar/Navbar'
import { Container } from '../container/Container'
import styles from './header.module.scss'
export const Header = () => {
	return (
		<header>
			<Container>
				<div className={styles['header-content']}>
					<h1>Logo</h1>
					<NavBar />
				</div>
			</Container>
		</header>
	)
}
