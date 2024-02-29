import { NavBar } from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
export const Header = () => {
	return (
		<header>
			<div className={styles['header-content']}>
				<Link to='/'>
					<h1 className={styles.logo}>LI</h1>
				</Link>
				<NavBar />
			</div>
		</header>
	)
}
