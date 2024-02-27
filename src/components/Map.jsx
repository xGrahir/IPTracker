import 'leaflet/dist/leaflet.css'
import styles from './Map.module.css'
import icon from '../utilities/images/icon-location.svg'
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useEffect } from 'react'

const RecenterAutomatically = ({ lat, lng }) => {
	const map = useMap()

	useEffect(() => {
		map.setView([lat, lng])
	}, [lat, lng, map])

	return null
}

export const Map = ({ data }) => {
	let position = [51.505, -0.09]

	if (data) {
		position = [data.location.lat, data.location.lng]
	}

    const customIcon = new Icon({
		iconUrl: icon,
		iconSize: [46, 56],
	})


	return (
		<div className={styles.map}>
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={true}
				touchZoom={false}
				className={styles['map-container']}>
				{/* <TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/> */}
                <ReactLeafletGoogleLayer />
				<Marker position={position} icon={customIcon}>
					<Popup>
						Your location
					</Popup>
				</Marker>
				<RecenterAutomatically lat={position[0]} lng={position[1]} />
			</MapContainer>
		</div>
	)
}
