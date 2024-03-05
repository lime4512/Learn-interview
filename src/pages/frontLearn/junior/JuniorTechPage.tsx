import { useParams } from 'react-router-dom'
import styles from './juniorPage.module.scss'
import { juniorData } from '../../../data/frontend-questions/junior/juniorData'
import { TextPageLevel } from '../../../components/textPageLevel/TextPageLevel'
export const JuniorTechPage = () => {
	const { tech } = useParams()
	const techS = tech != undefined ? tech.toLowerCase() : ''
	console.log(tech != undefined ? juniorData[techS] : '')
	return (
		<div className={styles.container}>
			<TextPageLevel title={tech != undefined ? tech : ''} />
			<ul>
				{tech != undefined
					? juniorData[techS].map(item => <li>{item.question}</li>)
					: ''}
			</ul>
		</div>
	)
}
