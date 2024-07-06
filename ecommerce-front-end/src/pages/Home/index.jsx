import { Col, Row } from "react-bootstrap";
import products from "../../products";

function Home() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
