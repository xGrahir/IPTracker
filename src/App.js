import { Header } from './components/Header'
import { Textbox } from './components/Textbox'
import { Wrapper } from './utilities/Wrapper'
import { useState, useEffect } from 'react'
import { Map } from './components/Map'
import styles from './App.module.css'

function App() {
	const [info, changeInfo] = useState()

	const getLocationHandler = async ip => {
		const response = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=at_MOcVG25mIQl4WMciyaPiCfCEMXokh&ipAddress=${ip}`
		)

		if (!response.ok) {
			console.log('smth went wrong')
			return
		}

		const data = await response.json()

		changeInfo(data)

    console.log(data.location.lat);
	}

	useEffect(() => {
		getLocationHandler('192.212.174.101')
	}, [])


	return (
			<div className={styles.box}>
				<Header getLocation={getLocationHandler} />
				<Textbox data={info} />
				<Map data={info}/>
			</div>

	)
}

export default App
