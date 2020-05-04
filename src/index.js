import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { BrowserRouter}  from 'react-router-dom'; 
import './index.css';
import { createStore, applyMiddleware } from 'redux'; 
import App from './App';
import thunk from 'redux-thunk';
import weatherDataReducer from './store/reducers/weatherDataReducer';

const store = createStore(weatherDataReducer, applyMiddleware(thunk));

	const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
