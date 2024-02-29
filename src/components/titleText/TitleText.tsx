import { FunctionComponent } from 'react'
import styles from './titletext.module.scss'

interface Props {
	title: string
	text: string
}

export const TitleText: FunctionComponent<Props> = ({ title, text }) => {
	return (
		<div className={styles['content-text']}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.text}>{text}</p>
		</div>
	)
}
