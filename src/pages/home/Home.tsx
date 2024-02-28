import styles from './home.module.scss'

export const Home = () => {
	return (
		<section className={styles.home}>
			<div className={styles.content}>
				<div className={styles['content-text']}>
					<h1 className={styles.title}>Web Developer for 2024</h1>
					<p className={styles.text}>
						Step by step guide to become a developer by learning important
						topics
					</p>
				</div>
				<div className={styles['card-list']}></div>
			</div>
		</section>
	)
}
