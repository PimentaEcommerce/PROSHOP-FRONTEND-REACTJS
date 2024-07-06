import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-6">Copyright &copy; Proshop</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
