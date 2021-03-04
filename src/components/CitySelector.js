import {Row, Col, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
	const city = 'Skopje';

	return (
		<>
			<Row>
				<Col>
					<Button onClick={() => onSearch(city)}>
						Check Weather
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default CitySelector;
