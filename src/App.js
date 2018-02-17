import React, { Component } from 'react';
import { string } from 'prop-types';
import Canvas from './components/Canvas';
class App extends Component {
	static proptypes = {
		message: string.isRequired
	};
	render() {
		return <Canvas />;
	}
}

export default App;
