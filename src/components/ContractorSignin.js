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
      email: '',
      password: '',
      businessName: '',
      imageurl: '',
      description: '',
      services: []
    }
  }

  changeValue = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editServices = (e) => {
    let services = []
    for (let i = 0, len = e.target.options.length; i < len; i++) {
        let opt = e.target.options[i];
        if (opt.selected) {
            services.push(opt.value);
        }
    }
    this.setState({
      services
    })
  }

  registerContractor = async () => {
    let response = await axios.post('https://def-hacks-backend.herokuapp.com/registerContractor', {...this.state})
    console.log(response)
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col md="3">
            <h1 id ="title">HomeFixLoans</h1>
          </Col>
          <Col>
        <Form id="contractor" id="forms">
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
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    type="text"
                    name="businessName"
                    id="businessName"
                    value={this.state.businessName}
                    onChange={this.changeValue}
                    placeholder="Enter Your Business Name" />
                </Col>
                <Col>
                  <Label htmlFor="imageurl">Image URL</Label>
                  <Input
                    type="text"
                    name="imageurl"
                    id="imageurl"
                    value={this.state.imageurl}
                    onChange={this.changeValue}
                    placeholder="Share a link to your company logo" />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Row>
                <Col>
                  <Label htmlFor="description">Company Description</Label>
                  <Input type="textarea" name="description" id="description" value={this.state.description} onChange={this.changeValue} />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Label htmlFor="services">What Services Do You Provide?</Label>
              <Input type="select" name="services" id="services" value={this.services} onChange={this.editServices} multiple>
                <option value="Roofing">Roofing</option>
                <option value="Heating">Heating</option>
                <option value="Plumbing">Plumbing</option>
              </Input>
            </Container>
          </FormGroup>
          <Button color="primary" size="lg" onClick={this.registerContractor}> Submit</Button>
        </Form>
        </Col>
        <Col md="3"></Col>
        </Row>
        </Container>
    );
  }
}

export default ContractorSignin;
