// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
	return 'Click on me!';
}
// Create a react component
// same ass const App = function() {}
const App = () => {
	const buttonText = { text: 'click me'};
	return (
		<div>
			<label className="label" htmlFor="name">
				Enter Name:
			</label>
			<input id="name"/>
			<button style={{backgroundColor: 'yellow', color: 'red'}}>
				{buttonText.text}
			</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);