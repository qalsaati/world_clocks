import { Container, Row, Col } from 'react-bootstrap';
import Clock from './Clock.jsx';

export default function WorldClock({ clockData }) {
  return (
    <Container>
      {clockData.map((data, index) => (
        <Row key={index}>
          <Col><strong>{data.city}</strong></Col>
          <Col><Clock timeZone={data.timeZone} /></Col>
        </Row>
      ))}
    </Container>
  );
}