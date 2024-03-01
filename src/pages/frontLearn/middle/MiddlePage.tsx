import { ListLevel } from '../../../components/level/ListLevel'
import { TextPageLevel } from '../../../components/textPageLevel/TextPageLevel'
import styles from './middlePage.module.scss'
export const MiddlePage = () => {
	const data = [
		{
			title: 'Level 1 Middle',
			text: 'В данном разделе собранный вопросы для начинающего middle специалиста',
			url: '',
		},
		{
			title: 'Level 2 Middle',
			text: 'В данном разделе собранный более сложные вопросы middle специалиста',
			url: '',
		},
		{
			title: 'Level 3 Middle',
			text: 'В данном разделе собранный вопросы для высшего уровня middle специалиста',
			url: '',
		},
		{
			title: 'Level 4 Middle',
			text: 'В данном разделе собранный самые сложные вопросы для уровня middle специалиста',
			url: '',
		},
	]
	return (
		<div className={styles.middlePage}>
			<TextPageLevel
				title='Выбор уровня Middle'
				text='Здесь нужно выбрать уровень изучения Middle с каждым высшим уровнем все более сложные темы'
			/>
			<ListLevel data={data} />
		</div>
	)
}
