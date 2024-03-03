import styles from './learnTech.module.scss'
import { Card } from '../../components/card/Card'
import { TitleText } from '../../components/titleText/TitleText'
import { NavBack } from '../../components/navBack/NavBack'
export const LearnTech = () => {
	return (
		<section className={styles.learnTech}>
			<div className={styles.content}>
				<TitleText
					title='Изучение технологии'
					text='Сделай выбор какую технологию в web тебе хочется изучить'
				/>
				<div className={styles['card-list']}>
					<Card
						url='/learntech/frontlearn'
						img='./image/card/card-doc.svg'
						title='Frontend'
						text='Вопросы связанные с фронтендом'
					/>
					<Card
						url='/learntech/backlearn'
						img='./image/card/card-doc-2.svg'
						title='Backend'
						text='Вопросы связанные с бэкендом'
					/>
				</div>
				<NavBack />
			</div>
		</section>
	)
}
