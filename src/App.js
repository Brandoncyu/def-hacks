import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Input
} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form id="homeowner">
          <FormGroup>
            <Container>
            <Row>
            <Col>
              <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter Your First Name" />

            </Col>
            <Col>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Your Last Name" />
            </Col>
            </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
              <Col>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email" />
              </Col>
              <Col>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password" />
                  </Col>
                </Row>
              </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
              <Col>
              <Label htmlFor="primaryPhone">Phone</Label>
              <Input
                name="primaryPhone"
                id="primaryPhone"
                placeholder="Enter Your Phone Number" />
              </Col>
              <Col>
                <Label htmlFor="dateOfBirth">Birth date</Label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth" />
                  </Col>
                </Row>
              </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col>
                  <Label htmlFor="address1">Address Line 1</Label>
                  <Input name="address1" id="address1" />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col md={6}>
                  <Label htmlFor="city">City</Label>
                  <Input name="city" id="city" />
                </Col>
                <Col md={4}>
                  <Label htmlFor="state">State</Label>
                  <Input name="state" id="state" />
                </Col>
                <Col md={2}>
                  <Label htmlFor="zipcode">Zip</Label>
                  <Input name="zipcode" id="zipcode" />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col>
                  <Label htmlFor="educationLevel">Employment Status</Label>
                  <Input type="select" name="educationLevel" id="educationLevel">
                    <option value="employed">Employed</option>
                    <option value="military">Military</option>
                    <option value="not_employed">Not Employed</option>
                    <option value="retired">Retired</option>
                    <option value="self_employed">Self-Employed</option>
                  </Input>
                </Col>
                <Col>
                  <Label htmlFor="income">Annual Income</Label>
                  <Input name="income" id="income" />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col>
                  <Label htmlFor="providedCreditRating">Credit Score</Label>
                  <Input type="select" name="providedCreditRating" id="providedCreditRating">
                    <option value ="excellent">Excellent (720+)</option>
                    <option value="good">Good (660-720)</option>
                    <option value="fair">Fair (600-659)</option>
                    <option value="poop">Poor (600-)</option>
                  </Input>
                </Col>
                <Col>
                  <Label htmlFor="propertyStatus">Do You Rent Or Own?</Label>
                  <Input type="select" name="propertyStatus" id="propertyStatus">
                    <option value ="rent">Rent</option>
                    <option value="own_outright">Own</option>
                  </Input>
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col>
                  <Label htmlFor="frequency">Payment Frequency</Label>
                  <Input type="select" name="frequency" id="frequency">
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Biweekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="twice_monthly">Twice Monthly</option>
                  </Input>
                </Col>
                <Col>
                  <Label htmlFor="ssn">Social Secutiry Number</Label>
                  <Input name="ssn" id="ssn" />
                </Col>
              </Row>
            </Container>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default App;
