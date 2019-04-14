import React, { Component } from 'react';
import axios from 'axios'
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

class ContractorSignin extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      businessName
    }
  }

  changeValue = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }



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
                  value={this.state.firstName}
                  onChange={this.changeValue}
                  placeholder="Enter Your First Name" />

            </Col>
            <Col>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={this.state.lastName}
                onChange={this.changeValue}
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
                value={this.state.email}
                onChange={this.changeValue}
                placeholder="Enter Your Email" />
              </Col>
              <Col>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.changeValue}
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
                value={this.state.primaryPhone}
                onChange={this.changeValue}
                placeholder="Enter Your Phone Number" />
              </Col>
              <Col>
                <Label htmlFor="dateOfBirth">Birth date</Label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={this.state.dateOfBirth}
                  onChange={this.changeValue}
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
                  <Input name="address1"
                  id="address1"
                  value={this.state.address1}
                  onChange={this.changeValue} />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col md={6}>
                  <Label htmlFor="city">City</Label>
                  <Input
                  name="city"
                  id="city"
                  value={this.state.city}
                  onChange={this.changeValue} />
                </Col>
                <Col md={4}>
                  <Label htmlFor="state">State</Label>
                  <Input name="state"
                  id="state"
                  value={this.state.state}
                  onChange={this.changeValue}/>
                </Col>
                <Col md={2}>
                  <Label htmlFor="zipcode">Zip</Label>
                  <Input name="zipcode"
                  id="zipcode"
                  value={this.state.zipcode}
                  onChange={this.changeValue} />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col>
                  <Label htmlFor="educationLevel">Employment Status</Label>
                  <Input type="select" name="educationLevel" id="educationLevel" value={this.state.educationLevel}
                  onChange={this.changeValue}>
                    <option value="associate">Associates</option>
                    <option value="bachelors">Bachelors</option>
                    <option value="high_school">High School</option>
                    <option value="masters">Masters</option>
                    <option value="other">Other</option>
                  </Input>
                </Col>
                <Col>
                  <Label htmlFor="income">Annual Income</Label>
                  <Input name="income" id="income" value={this.state.income}
                  onChange={this.changeValue} />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col>
                  <Label htmlFor="providedCreditRating">Credit Score</Label>
                  <Input type="select" name="providedCreditRating" id="providedCreditRating" value={this.state.providedCreditRating}
                  onChange={this.changeValue}>
                    <option value ="excellent">Excellent (720+)</option>
                    <option value="good">Good (660-720)</option>
                    <option value="fair">Fair (600-659)</option>
                    <option value="poor">Poor (600-)</option>
                  </Input>
                </Col>
                <Col>
                  <Label htmlFor="propertyStatus">Do You Rent Or Own?</Label>
                  <Input type="select" name="propertyStatus" id="propertyStatus" value={this.state.propertyStatus}
                  onChange={this.changeValue}>
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
                  <Input type="select" name="frequency" id="frequency" value={this.state.frequency}
                  onChange={this.changeValue}>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Biweekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="twice_monthly">Twice Monthly</option>
                  </Input>
                </Col>
                <Col>
                  <Label htmlFor="ssn">Social Secutiry Number</Label>
                  <Input name="ssn" id="ssn" value={this.state.ssn}
                  onChange={this.changeValue} />
                </Col>
              </Row>
            </Container>
          </FormGroup>
        </Form>
        <Button onClick={this.getDate}> Submit</Button>
      </div>
    );
  }
}

export default ContractorSignin;
