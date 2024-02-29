import { Card } from '../../components/card/Card'
import { TitleText } from '../../components/titleText/TitleText'
import styles from './home.module.scss'

export const Home = () => {
	return (
		<section className={styles.home}>
			<div className={styles.content}>
				<TitleText
					title='Web Developer for 2024'
					text='Step by step guide to become a developer by learning important topics'
				/>
				<div className={styles['card-list']}>
					<Card
						url='/learntech'
						img='./image/card/card-doc.svg'
						title='Изучение технологий'
						text='Здесь собрана база вопросов'
					/>
					<Card
						url='/questions'
						img='./image/card/card-doc-2.svg'
						title='Вопросы к собеседованию'
						text='Базовые вопросы для собеседования'
					/>
					<Card
						url='/tests'
						img='./image/card/card-doc-3.svg'
						title='Тест по изученным вопросам'
						text='Тест для проверки выученного'
					/>
				</div>
			</div>
		</section>
	)
}
