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

  render() {
    console.log(this.state)
    return (
        <Form id="contractor">
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
                  <Label htmlFor="description">Text Area</Label>
                  <Input type="textarea" name="description" id="description" value={this.state.description} onChange={this.changeValue} />
                </Col>
              </Row>
            </Container>
          </FormGroup>
          <FormGroup>
            <Container>
              <Label htmlFor="services">What Services Do You Provide?</Label>
              <Input type="select" name="services" id="services" value={this.services} onChange={this.editServices} multiple>
                <option value="roofing">Roofing</option>
                <option value="heating">Heating</option>
                <option value="plumbing">Plumbing</option>
              </Input>
            </Container>
          </FormGroup>
          <Button> Submit</Button>
        </Form>

    );
  }
}

export default ContractorSignin;
