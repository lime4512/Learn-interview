import { TextPageLevel } from '../../../../components/textPageLevel/TextPageLevel'
import { ListLevel } from '../../../../components/level/ListLevel'
import styles from '../juniorPage.module.scss'

export const Junior1 = () => {
	const data = [
		{
			title: 'HTML',
			text: 'Это стандартный язык разметки, используемый для создания веб-страниц и веб-приложений. ',
			url: '',
		},
		{
			title: 'CSS',
			text: 'Это язык таблиц стилей, используемый для описания внешнего вида и стилей веб-страниц',
			url: '',
		},
		{
			title: 'JavaScript',
			text: 'Это высокоуровневый интерпретируемый язык программирования,',
			url: '',
		},
		{
			title: 'React',
			text: 'Это JavaScript библиотека для разработки пользовательских интерфейсов. ',
			url: '',
		},
	]
	return (
		<div className={styles.container}>
			<TextPageLevel title='Front-end Junior 1 level' />
			<ListLevel data={data} />
		</div>
	)
}
