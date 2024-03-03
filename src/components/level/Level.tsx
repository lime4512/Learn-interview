import styles from './level.module.scss'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
interface Props {
	title: string
	text?: string
	url: string
}

export const Level: FunctionComponent<Props> = ({ title, text, url }) => {
	return (
		<Link to={`/learntech/frontlearn/junior/${url}`}>
			<li className={styles.content}>
				<div className={styles['text-content']}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.text}>{text}</p>
				</div>
				<button className={styles.btn}>Жмак</button>
			</li>
		</Link>
	)
}
