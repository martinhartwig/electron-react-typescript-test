import * as React from 'react';

import {NavMainItem} from './NavMainItem';
import './NavMain.scss';


const navItems = [
	{
		title: 'Apps',
		isActive: true,
	},
	{
		title: 'Training',
		isActive: false,
	},
	{
		title: 'Support',
		isActive: false,
	},
	{
		title: 'What\'s new',
		isActive: false,
	},
];

export class NavMain extends React.Component<{}, {}> {

	render() {
		return (
			<div className="nav-main">
				<ul className="nav-main__list">
					{navItems.map(item => <NavMainItem key={item.title} title={item.title} isActive={item.isActive}/>)}
				</ul>
			</div>
		);
	}
}