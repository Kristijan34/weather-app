import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp, main, icon, wind_speed, wind_deg}) => {
	const date = new Date(dt);
	return (
		<Card>
			<Card.Img
				variant="top"
				src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
			/>
			<Card.Body>
				<Card.Title>{main}</Card.Title>
				<p>{date.toLocaleDateString()}</p>
				<p>Temperature:{temp}°F</p>
				<p>Wind speed: {wind_speed} miles/hour</p>
				<p>Wind Direction:{wind_deg}° </p>
			</Card.Body>
		</Card>
	);
};
export default WeatherCard;
