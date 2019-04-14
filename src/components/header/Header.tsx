import * as React from 'react';

import './Header.scss';

export class Header extends React.Component<{}, {}> {

	render() {
		return (
			<div className="header">
				<div className="header__title">
					<h1>Launcher</h1>
					<div className="logo"></div>
				</div>
				{/*<img src="https://images.unsplash.com/photo-1547548437-761f129560ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2874&q=80" />*/}
				<img
					src="https://images.unsplash.com/photo-1537612353236-202c3267efec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2992&q=80"/>
			</div>
		);
	}
}