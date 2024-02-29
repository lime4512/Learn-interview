import { Link } from 'react-router-dom'
import styles from './card.module.scss'
import { FunctionComponent } from 'react'

interface Props {
	url: string
	img: string
	title: string
	text: string
}

export const Card: FunctionComponent<Props> = ({ url, img, title, text }) => {
	return (
		<Link to={url}>
			<div className={styles.card}>
				<img src={img} alt='' className={styles['img-card']} />
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>
				<div className={styles['block-btn']}>
					<button className={styles['button-card']}>Смотреть</button>
				</div>
			</div>
		</Link>
	)
}
