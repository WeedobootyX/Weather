import * as actionTypes from '../actions/actionTypes'; 
import {updateObject} from '../../shared/utility'; 

const initialState = {
	sensorList: [],
	sensorGraphInformationList: [], 
	loading: false,
	error: null
}

const getSensorListStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getSensorListSuccess = (state, action) => {
	return updateObject(state, {
		sensorList: action.sensorList,
		loading: false
	});
}

const getSensorListFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const getPeriodSensorValuesStart = (state, action) => {
	return updateObject(state, {
		loading: true, 
		error: null
	})
}

const getPeriodSensorValuesSuccess = (state, action) => {
	const newSensorGraphInformationList = [...state.sensorGraphInformationList];
	for(var i = 0; i < newSensorGraphInformationList.length; i++) {
		if(newSensorGraphInformationList[i].sensorKey == action.sensorGraphInformation.sensorKey) {
			newSensorGraphInformationList.splice(i, 1);
		}
	}
	newSensorGraphInformationList.push(action.sensorGraphInformation);
	return updateObject(state, {
		sensorGraphInformationList: newSensorGraphInformationList,
		loading: false
	});
}

const getPeriodSensorValuesFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error
	})
}

const weatherDataReducer = (state = initialState, action) => {
	switch(action.type){
		case (actionTypes.GET_SENSOR_LIST_START): return getSensorListStart(state, action);
		case (actionTypes.GET_SENSOR_LIST_SUCCESS): return getSensorListSuccess(state, action);
		case (actionTypes.GET_SENSOR_LIST_FAIL): return getSensorListFail(state, action);

		case (actionTypes.GET_PERIOD_SENSOR_VALUES_START): return getPeriodSensorValuesStart(state, action);
		case (actionTypes.GET_PERIOD_SENSOR_VALUES_SUCCESS): return getPeriodSensorValuesSuccess(state, action);
		case (actionTypes.GET_PERIOD_SENSOR_VALUES_FAIL): return getPeriodSensorValuesFail(state, action);

		default: return state;
	}
}

export default weatherDataReducer; 