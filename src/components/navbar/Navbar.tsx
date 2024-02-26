import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
export const NavBar = () => {
	return (
		<nav>
			<ul className={styles['nav-list']}>
				<li>
					<Link to='/'>Дом</Link>
				</li>
				<li>
					<Link to='/learnTech'>Изучение технологий</Link>
				</li>
				<li>
					<Link to='/questions'>Вопросы к собеседованию</Link>
				</li>
				<li>
					<Link to='tests'>Тесты</Link>
				</li>
			</ul>
		</nav>
	)
}
