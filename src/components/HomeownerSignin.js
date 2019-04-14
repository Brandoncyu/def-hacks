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

class HomeownerSignin extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      primaryPhone: '',
      dateOfBirth: '',
      address1: '',
      city: '',
      state: '',
      zipcode: '',
      educationLevel: 'associate',
      income: '',
      providedCreditRating: 'excellent',
      propertyStatus: 'rent',
      frequency: 'weekly',
      ssn: '',
      offers: []
    }
  }

  changeValue = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getDate = async () => {
    let response = await axios(`https://api.evenfinancial.com/leads/rateTables`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2`,
          'Accept': 'application/vnd.evenfinancial.v1+json',
          'Content-Type': 'application/json'
      }, data: {
        "productTypes": [
          "loan"
        ],
        "personalInformation": {
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "email": this.state.email,
          "city": this.state.city,
          "state": this.state.state,
          "primaryPhone": this.state.primaryPhone,
          "address1": this.state.address1,
          "zipcode": this.state.zipcode,
          "dateOfBirth": this.state.dateOfBirth,
          "educationLevel": this.state.educationLevel,
          "ssn": this.state.ssn
        },
        "loanInformation": {
          "purpose": "home_improvement",
          "loanAmount": 30000
        },
        "creditInformation": {
          "providedCreditRating": this.state.providedCreditRating
        },

        "legalInformation": {
          "consentsToFcra": true,
          "consentsToTcpa": true,
          "tcpaLanguage": "I agree to be contacted by Even Financial and its partners at the telephone number(s) I have provided above to explore personal loan offers, including contact through automatic dialing systems, artificial or pre-recorded voice messaging, or text message. I understand my consent is not required as a condition to purchasing any goods or services from anyone."
        },
        "clientTags": {
          "hello": [
            "world",
            "there"
          ],
          "something": [
            "else"
          ]
        }
      }
    })

    let offers = response.data.loanOffers
    console.log('offers', offers)
    this.setState({
      offers
    })
  }

  render() {
    console.log(this.state.offers)
    return (

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
          <Button onClick={this.getDate}> Submit</Button>
        </Form>
        
    );
  }
}

export default HomeownerSignin;
