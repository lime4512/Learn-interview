import styles from './frontLearn.module.scss'
import { Card } from '../../components/card/Card'
import { TitleText } from '../../components/titleText/TitleText'

export const FrontLearn = () => {
	return (
		<section className={styles.frontLearn}>
			<div className={styles.content}>
				<TitleText
					title='Frontend'
					text='Здесь собранна база вопросов изучив которые вы станете достойным разработчиком'
				/>
				<div className={styles['card-list']}>
					<Card
						url=''
						img='/image/card/person_1.svg'
						title='Junior'
						text='База вопросов для начинающего'
					/>
					<Card
						url=''
						img='/image/card/group_2.svg'
						title='Middle'
						text='База вопросов для знающего'
					/>
					<Card
						url=''
						img='/image/card/groups_3.svg'
						title='Senior'
						text='База вопросов для опытного'
					/>
				</div>
			</div>
		</section>
	)
}
