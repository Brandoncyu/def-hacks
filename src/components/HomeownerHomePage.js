import React, { Component } from 'react';
import axios from 'axios'
import {
  Button, Container, Row, Col, Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody
} from 'reactstrap'

class HomeownerHomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      contractors: []
    }
  }

  async componentDidMount(){
    let contractors = await this.getContractors()
    console.log(contractors)
    this.setState({
      contractors
    })
  }

  getContractors = async() =>{
    let response = await axios.get('https://def-hacks-backend.herokuapp.com/contractor/')

    return response.data.data
  }


  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col md="3">
            <h1 id ="title">HomeFixLoans</h1>
          </Col>
          <Col></Col>

      </Row>
      <Row>
        <Col>
          <CardColumns>
            {this.state.contractors.map((contractor, value) =>
              <Card key={value}>
                <CardImg top width="100%" src={contractor.imageurl} alt="Card image cap" />
                <CardBody>
                <CardTitle>{contractor.businessname}</CardTitle>
                <CardSubtitle>"{contractor.description}"</CardSubtitle>
                <br />
                <CardText>Main Contact: {contractor.firstname} {contractor.lastname}</CardText>
                <CardText>Email: {contractor.email}</CardText>
                <CardText>Services Offered:</CardText>
                {contractor.services.map((service, value) => <CardText>{service} <Button color="primary" size="sm">Order Service</Button></CardText>)}
              </CardBody>
              </Card>)}
          </CardColumns>


        </Col>

    </Row>
    </Container>
    );
  }
}

export default HomeownerHomePage;
