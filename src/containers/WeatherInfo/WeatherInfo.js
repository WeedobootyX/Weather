import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import * as actions from '../../store/actions/index'; 

import * as classes from './WeatherInfo.module.css'; 

class WeatherInfo extends Component{

	constructor(props) {
		super(props);
		const siteKey = "polypod";
		const deviceKey = "arduino-nano-33-iot"; 
		const sensorKey = "rain";
		const periodHrs = 24;
		console.log("----------before----------");
		this.props.getPeriodSensorValues(siteKey, deviceKey, sensorKey, periodHrs);
	}

	render(){
		return (
			<div className={ classes.WeatherInfoContainer } id="weatherInfoContainer">	
				<p>There will be weather information here</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		values: state
	}
}

const mapDispatchToProps = (dispatch)  => {
	return {
		getPeriodSensorValues: (siteKey, deviceKey, sensorKey, periodHrs) => dispatch(actions.getPeriodSensorValues(siteKey, deviceKey, sensorKey, periodHrs))	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);
 