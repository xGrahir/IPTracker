import styles from './Header.module.css'
import { Form } from './Form'

export const Header = ({getLocation}) => {

    const ipProvider = (ip) => {
        getLocation(ip)
    }

	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1>IP Adress Tracker</h1>
                <Form ipProvider={ipProvider}/>
			</div>
		</div>
	)
}
