import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import HomeownerSignin from './components/HomeownerSignin'
import ContractorSignin from './components/ContractorSignin'
import HomePage from './components/HomePage'

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
        <Route exact path="/" render={()=>{
            return <HomePage />
        }} />
      </Switch>
    );
  }
}

export default withRouter(App);
