import { Level } from '../../../components/level/Level'
import { TextPageLevel } from '../../../components/textPageLevel/TextPageLevel'
import { levelData } from '../../../data/frontend-questions/junior/leveldata'
import styles from './juniorPage.module.scss'
import { useParams } from 'react-router-dom'

export const JuniorLevelPage = () => {
	const { level } = useParams()

	return (
		<div className={styles.container}>
			<TextPageLevel
				title={level != undefined ? levelData[level][0].title : ''}
			/>
			<ul className={styles.list}>
				{level != undefined
					? levelData[level][0].tech.map(item => (
							<Level
								title={item}
								url={`${level}/${item}`}
								key={Math.random()}
							/>
					  ))
					: ''}
			</ul>
		</div>
	)
}
