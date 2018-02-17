import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Game from './containers/Game';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	reducer,
	window.___REDUX_DEVTOOLS_EXTENTION__ && window.___REDUX_DEVTOOLS_EXTENTION__
);

ReactDOM.render(
	<Provider store={store}>
		<Game />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
