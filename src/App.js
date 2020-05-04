import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'; 

import Layout from './hoc/Layout/Layout'; 

import PublicHomePage from './containers/PublicHomePage/PublicHomePage'; 
import WeatherInfo from './containers/WeatherInfo/WeatherInfo';

import './App.css';

class App extends Component{

  render(){

    let routes = (
      <Switch>
        <Route path='/weather-info' component={WeatherInfo} />
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