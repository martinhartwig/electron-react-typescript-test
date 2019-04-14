import * as React from 'react';

import {AppItem} from './AppItem';
import './Apps.scss';

import * as applications from '../../applications.json';


export class Apps extends React.Component<{}, {}> {

	render() {
		return (
			<div className="apps">
				<ul className="apps__list">
					{applications.map((item: any) => <AppItem key={item.name} name={item.name} isDisabled={item.isDisabled}/>)}
				</ul>
			</div>
		);
	}
}