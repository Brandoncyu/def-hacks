import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import HomeownerSignin from './components/HomeownerSignin'
import ContractorSignin from './components/ContractorSignin'
import HomeownerHomePage from './components/HomeownerHomePage'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/homeowner" render={()=>{
            return <HomeownerSignin />
        }} />
        <Route exact path="/homeowner/home" render={()=>{
            return <HomeownerHomePage />
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
