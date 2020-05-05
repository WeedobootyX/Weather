import React from 'react'; 

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import * as classes from './StatsGraph.module.css'; 

const statsGraph = (props) => {
	const width = props.width; 
	let tableData = [];
	for(let i = 0; i < props.sensorGraphInformation.sensorIndicationList.length; i++){
		tableData.push({					
			'Tid': props.sensorGraphInformation.sensorIndicationList[i].receivedStr,
			'Värde': props.sensorGraphInformation.sensorIndicationList[i].sensorValue1, 
		});
	}
	console.log("tableData: ", tableData);
	console.log("height: ", props.height);
	console.log("width: ", props.width);
	console.log("props.xAxisDataKey: ", props.xAxisDataKey);
	console.log("props.yAxisDataKey: ", props.yAxisDataKey);
	return (
		<div>
			<div className={ classes.ExtraDataContainer }>
				<h2>{ props.sensorGraphInformation.displayText }</h2>
			</div>

			<LineChart
		        width={ props.width }
		        height={ props.height }
		        data={ tableData }
		        margin={{
		          top: 35, right: width/12, left: 0, bottom: 15
		        }}
		    >
		        <CartesianGrid strokeDasharray="6 6" />
		        <YAxis />
		        <Tooltip />
		        <Line type="linear" dot={ false } activeDot={ false } dataKey={props.yAxisDataKey} stroke="blue"/>
		        <XAxis dataKey={ props.xAxisDataKey } />
		    </LineChart>
	    </div>
	)
}

export default statsGraph; 