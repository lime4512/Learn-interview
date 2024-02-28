import styles from './card.module.scss'

export const Card = () => {
	return (
		<div className={styles.card}>
			<img
				src='./image/card/card-doc.svg'
				alt=''
				className={styles['img-card']}
			/>
			<h3 className={styles.title}>Изучение технологий</h3>
			<p className={styles.text}>Здесь собрана база вопросов</p>
			<div className={styles['block-btn']}>
				<button className={styles['button-card']}>Посмотреть</button>
			</div>
		</div>
	)
}
