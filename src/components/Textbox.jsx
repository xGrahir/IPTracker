import styles from './Textbox.module.css'
import { Info } from './Info'

export const Textbox = ({ data }) => {
	let localisationInfo
    let info

	if(data) {
		localisationInfo = [
			{ name: 'IP Address', value: data.ip },
			{ name: 'Location', value: `${data.location.country}, ${data.location.region}` },
			{ name: 'Timezone', value: `UTC ${data.location.timezone}` },
			{ name: 'ISP', value: data.isp },
		]	
        info = localisationInfo.map(obj => <Info key={obj.name} name={obj.name} value={obj.value}/>)
	}


	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				{info}
			</div>
		</div>
	)
}
