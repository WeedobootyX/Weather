import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'; 

import { objectIsEmpty } from './shared/utility'; 
import asyncComponent from './hoc/asyncComponent/asyncComponent'; 

import Layout from './hoc/Layout/Layout'; 

import PublicHomePage from './containers/PublicHomePage/PublicHomePage'; 

import * as actions from '../store/actions/index'; 

import './App.css';

// Lazyload components with our hoc
const asyncWeatherInfo = asyncComponent(() => {
  return import('./containers/WeatherInfo/WeatherInfo');
});

class App extends Component{

  constructor(props){
    super(props);
  }

  render(){

    let routes = (
      <Switch>
        <Route path='/weather-info' exact component={asyncWeatherInfo} />
        <Route path = '/' component={ PublicHomePage }/>
      </Switch>
    );

    return (
      <Layout>
        {routes}
      </Layout>
    );

  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));