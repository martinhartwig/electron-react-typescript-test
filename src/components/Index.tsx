import * as React from 'react';

import {Header} from './header/Header';
import {NavMain} from './nav/NavMain';
import {Search} from './search/Search';
import {Apps} from './apps/Apps';

import './Index.scss';


const Index = () => (
	<React.Fragment>
		<Header/>
		<NavMain/>
		<div className="content">
			<Search/>
			<Apps/>
		</div>
		<p className="footer">
			<small>
				We are using node {process ? process.versions.node : ''},
				Chrome {process ? process.versions.chrome : ''},
				and Electron {process ? process.versions.electron : ''}.
			</small>
		</p>
	</React.Fragment>
);

export default Index;
