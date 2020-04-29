import * as actionTypes from './actionTypes'; 

import axios from '../axios'; 

export const getSensorListStart = () => {
	return {
		type: actionTypes.GET_SENSOR_LIST_START
	}
}

export const getSensorListSuccess = (data) => {
	return {
		type: actionTypes.GET_SENSOR_LIST_SUCCESS, 
		sensorList: data
	}
}

export const getSensorListFail = (error) => {
	return {
		type: actionTypes.GET_SENSOR_LIST_FAIL,
		error: error
	}
}

export const getPeriodSensorValuesStart = () => {
	return {
		type: actionTypes.GET_PERIOD_SENSOR_VALUES_START
	}
}

export const getPeriodSensorValuesSuccess = (data) => {
	return {
		type: actionTypes.GET_PERIOD_SENSOR_VALUES_SUCCESS, 
		sensorValues: data
	}
}

export const getPeriodSensorValuesFail = (error) => {
	return {
		type: actionTypes.GET_PERIOD_SENSOR_VALUES_FAIL,
		error: error
	}
}

export const getSensorList = (siteKey, deviceKey, apiKey) => {
	return dispatch => {
		dispatch(getSensorListStart());
		const url = '/sensorlist/' + siteKey + '/' + deviceKey + '/' + apiKey; 
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {
				dispatch(getSensorListSuccess(res.data)); 
			})
			.catch(error => {
				console.log('error', error);
				dispatch(getSensorListFail(JSON.stringify(error)))
			})
	}
}

export const getPeriodSensorValues = (siteKey, deviceKey, sensorKey, period) => {
	return dispatch => {
		dispatch(getPeriodSensorValuesStart());
		const apiKey = 'abc123';
		const url = '/sensor/values/' + siteKey + '/' + deviceKey + '/' + sensorKey + '/' + period + '/' + apiKey;
		const headers = {
			'headers': {
				'Content-Type': 'text/json'
			}
		}
		axios.get(url, headers)
			.then(res => {
				dispatch(getPeriodSensorValuesSuccess(res.data));
			})
			.catch(error => {
				console.log("error", error);
				dispatch(getPeriodSensorValuesFail(JSON.stringify(error)));
			});
	}
}