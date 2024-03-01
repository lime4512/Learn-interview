import { FunctionComponent } from 'react'
import styles from './textPageLevel.module.scss'
interface Props {
	title: string
	text: string
}

export const TextPageLevel: FunctionComponent<Props> = ({ title, text }) => {
	return (
		<div className={styles.content}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.text}>{text}</p>
		</div>
	)
}
