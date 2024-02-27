import styles from './Form.module.css'
import { useState } from 'react'

export const Form = ({ ipProvider }) => {
	const [currentIP, changeIP] = useState()
	const [error, setError] = useState(false)

	const submitHandler = e => {
		e.preventDefault()
		const regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
		if (currentIP && currentIP.match(regex)) {
			ipProvider(currentIP)
			setError(false)
		} else {
			setError(true)
		}
	}

	return (
		<div className={styles['form-container']}>
			<form>
				<div className={styles.input}>
					<input type='text' placeholder='Type IP Adress to search' onChange={e => changeIP(e.target.value)} />
					<button onClick={submitHandler}>
						<div className={styles['button-arrow']}></div>
					</button>
				</div>
				{error && <p className={styles.error}>Wrong IP Address</p>}
			</form>
		</div>
	)
}

//192.212.174.101
