import { FunctionComponent } from 'react'
import styles from './listlevel.module.scss'
import { Level } from './Level'

interface PropArr {
	title: string
	text: string
	url: string
}

interface Props {
	data: PropArr[]
}
export const ListLevel: FunctionComponent<Props> = ({ data }) => {
	return (
		<div className={styles.content}>
			<ul>
				{data.map(item => (
					<Level
						title={item.title}
						text={item.text}
						url={item.url}
						key={Math.random()}
					/>
				))}
			</ul>
		</div>
	)
}
