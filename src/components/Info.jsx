import styles from './Info.module.css'

export const Info = ({name, value}) => {
	return (
		<div className={styles['text-box']}>
			<p className={styles.name}>{name}</p>
			<p className={styles.value}>{value}</p>
		</div>
	)
}
