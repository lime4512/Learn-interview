import { ListLevel } from '../../../components/level/ListLevel'
import { TextPageLevel } from '../../../components/textPageLevel/TextPageLevel'
import styles from './juniorPage.module.scss'
export const JuniorPage = () => {
	const data = [
		{
			title: 'Level 1 Junior',
			text: 'В данном разделе собранный вопросы для начинающего junior специалиста',
			url: '',
		},
		{
			title: 'Level 2 Junior',
			text: 'В данном разделе собранный более сложные вопросы junior специалиста',
			url: '',
		},
		{
			title: 'Level 3 Junior',
			text: 'В данном разделе собранный вопросы для высшего уровня junior специалиста',
			url: '',
		},
	]
	return (
		<div className={styles.juniorPage}>
			<TextPageLevel
				title='Выбор уровня Junior'
				text='Здесь нужно выбрать уровень изучения Junior с каждым высшим уровнем все более сложные темы'
			/>
			<ListLevel data={data} />
		</div>
	)
}
