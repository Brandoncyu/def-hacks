import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (

      <Container fluid={true}>
        <Row>
          <Col md="3">
            <h1 id ="title">HomeFixLoans</h1>
          </Col>
          <Col>
            <div className="form-spacing">
              <div id="redirect">
                <h3>I am a....</h3>
                <Button tag={Link} to="/homeowner" color="primary" size="lg" block>Homeowner</Button>
                <Button tag={Link} to="/contractor" color="primary" size="lg" block>Contractor</Button>
                <br />
              </div>
            </div>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>

    );
  }
}

export default HomePage;
