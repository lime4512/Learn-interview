import { NavBar } from '../navbar/Navbar'

import styles from './header.module.scss'
export const Header = () => {
	return (
		<header>
			<div className={styles['header-content']}>
				<img src='./image/logo.png' alt='' className={styles['img-logo']} />
				<NavBar />
			</div>
		</header>
	)
}
