import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import * as actions from '../../store/actions/index'; 
import StatsGraph from '../../components/UI/StatsGraph/StatsGraph';
import * as classes from './WeatherInfo.module.css'; 

class WeatherInfo extends Component{

	constructor(props) {
		super(props);
		const siteKey = "polypod";
		const deviceKey = "arduino-nano-33-iot"; 
		const periodHrs = 24;
		this.props.getPeriodSensorValues(siteKey, deviceKey, "rain", periodHrs);
		this.props.getPeriodSensorValues(siteKey, deviceKey, "atmospheric-pressure", periodHrs);
		this.props.getPeriodSensorValues(siteKey, deviceKey, "outdoor-temp", periodHrs);
		this.props.getPeriodSensorValues(siteKey, deviceKey, "wind-speed", periodHrs);
	}

	render(){
		return (
			<div className={ classes.WeatherInfoContainer } id="weatherInfoContainer">	
				{this.props.sensorGraphInformationList.map(sensorGraphInformation => {
					return (
						<div key={sensorGraphInformation.sensorKey}>
							<StatsGraph sensorGraphInformation={sensorGraphInformation}
							width={800}
							height={300}
							xAxisDataKey={"Tid"}
							yAxisDataKey={"Värde"}
							/>
						</div>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		sensorGraphInformationList: state.sensorGraphInformationList
	}
}

const mapDispatchToProps = (dispatch)  => {
	return {
		getPeriodSensorValues: (siteKey, deviceKey, sensorKey, periodHrs) => dispatch(actions.getPeriodSensorValues(siteKey, deviceKey, sensorKey, periodHrs))	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);
 