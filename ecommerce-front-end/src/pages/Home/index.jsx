import { Col, Row } from "react-bootstrap";
import Product from "../../components/Product";
import products from "../../products";

function Home() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={3}
            key={product._id}
            className="d-flex mb-4"
          >
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
