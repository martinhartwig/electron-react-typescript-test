import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Index from './components';


// Create main element
const mainElement = document.createElement('app');
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		mainElement
	);
};
render(Index);

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
	module.hot.accept('./components/Index', () => {
		import('./components/Index').then(World => {
			render(World.default);
		});
	});
}
