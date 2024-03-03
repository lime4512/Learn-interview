import { ListLevel } from '../../../components/level/ListLevel'
import { NavBack } from '../../../components/navBack/NavBack'
import { TextPageLevel } from '../../../components/textPageLevel/TextPageLevel'
import styles from './juniorPage.module.scss'
export const JuniorPage = () => {
	const data = [
		{
			title: 'Level 1 Junior',
			text: 'В данном разделе собранный вопросы для начинающего junior специалиста',
			url: 'level-1',
		},
		{
			title: 'Level 2 Junior',
			text: 'В данном разделе собранный более сложные вопросы junior специалиста',
			url: 'level-2',
		},
		{
			title: 'Level 3 Junior',
			text: 'В данном разделе собранный вопросы для высшего уровня junior специалиста',
			url: 'level-3',
		},
	]
	return (
		<div className={styles.juniorPage}>
			<TextPageLevel
				title='Выбор уровня Junior'
				text='Здесь нужно выбрать уровень изучения Junior с каждым высшим уровнем все более сложные темы'
			/>
			<ListLevel data={data} />
			<NavBack />
		</div>
	)
}
