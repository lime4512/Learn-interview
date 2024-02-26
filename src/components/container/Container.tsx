import { FunctionComponent } from 'react'
import styles from './container.module.scss'

interface Props {
	children: React.ReactNode
}

export const Container: FunctionComponent<Props> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}
