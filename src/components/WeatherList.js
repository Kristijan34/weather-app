import React from 'react';
import {Col, Row} from 'react-bootstrap';
import WeatherCard from './WeatherCard';

const WeatherList = ({weathers}) => {
	return (
		<Row>
			{weathers.map(({dt, main, weather, wind}) => (
				<Col key={dt}>
					<WeatherCard
						temp={main.temp}
						wind_speed={wind.speed}
						wind_deg={wind.deg}
						dt={dt * 1000}
						main={weather[0].main}
						icon={weather[0].icon}
					/>
				</Col>
			))}
		</Row>
	);
};

export default WeatherList;
