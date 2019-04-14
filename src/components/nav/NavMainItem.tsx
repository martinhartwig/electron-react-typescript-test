import * as React from 'react';

import './NavMainItem.scss';


interface INavMainItemProps {
	title: string;
	isActive: boolean;
}

export class NavMainItem extends React.Component<INavMainItemProps, {}> {

	render() {
		const className = 'nav-main__listitem ' + (this.props.isActive ? 'nav-main__listitem--active' : '');
		return (
			<li className={className}>
				<a href="#">{this.props.title}</a>
			</li>
		);
	}
}