import Header from '@/components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (props) => (
  <Container className={`layout layout--default ${props.className}`} fluid>
    <Row>
      <Col>
        <Container>
          <Row>
            <Header />
          </Row>
          {props.children}
        </Container>
      </Col>
    </Row>
  </Container>
);
