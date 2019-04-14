import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import HomeownerSignin from './components/HomeownerSignin'
import ContractorSignin from './components/ContractorSignin'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/homeowner" render={()=>{
            return <HomeownerSignin />
        }} />
        <Route exact path="/contractor" render={()=>{
            return <ContractorSignin />
        }} />
      </Switch>
    );
  }
}

export default withRouter(App);
