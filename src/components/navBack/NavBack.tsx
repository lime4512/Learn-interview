import { useNavigate } from 'react-router-dom'
import styles from './navBack.module.scss'
export const NavBack = () => {
	const navigate = useNavigate()
	const Back = () => navigate(-1)
	return (
		<div className={styles.content}>
			<button onClick={Back} className={styles.btnBack}>
				Назад
			</button>
		</div>
	)
}
