import styles from './seniorPage.module.scss'
import { ListLevel } from '../../../components/level/ListLevel'
import { TextPageLevel } from '../../../components/textPageLevel/TextPageLevel'
import { NavBack } from '../../../components/navBack/NavBack'
export const SeniorPage = () => {
	const data = [
		{
			title: 'Level 1 Senior',
			text: 'В данном разделе собранный вопросы для senior специалиста',
			url: '',
		},
	]
	return (
		<div className={styles.seniorPage}>
			<TextPageLevel
				title='Выбор уровня Senior'
				text='Здесь нужно выбрать уровень изучения Senior с каждым высшим уровнем все более сложные темы'
			/>
			<ListLevel data={data} />
			<NavBack />
		</div>
	)
}
