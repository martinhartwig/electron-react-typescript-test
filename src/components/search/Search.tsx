import * as React from 'react';

import './Search.scss';

import * as applications from '../../applications.json';

interface IApplicationsItem {
	name: string;
	isDisabled: boolean;
}


interface ISearchProps {
}

interface ISearchState {
	searchText: string;
	selectedIdx: number;
}

export class Search extends React.Component<ISearchProps, ISearchState> {
	private selectedButton: React.RefObject<any>;

	constructor(props: ISearchProps) {
		super(props);
		this.selectedButton = React.createRef();
		this.state = {
			searchText: '',
			selectedIdx: 0,
		};
	}

	render() {
		let searchResult = this.getSearchResult();
		return (
			<div className="search">
				<input className="search-input" type="text" onKeyUp={this.handleKeyUp.bind(this)}/>
				{searchResult.length > 0 ?
					<ul className="search-results">
						{searchResult.map((res: IApplicationsItem, idx: number) => (
							<li key={res.name} className={idx === this.state.selectedIdx ? 'selected' : ''}>
								<button onClick={() => alert('Starting application ' + res.name)}
												ref={idx === this.state.selectedIdx ? this.selectedButton : null}>{res.name}</button>
							</li>
						))}
					</ul> : null}
			</div>
		);
	}

	handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			this.selectedButton.current ? this.selectedButton.current.click() : null;
		} else if (event.key === 'ArrowDown') {
			//console.debug( this.state.selectedIdx, ',', this.getSearchResult().length - 1 );
			this.setState(Object.assign({}, this.state, {
				selectedIdx: (this.getSearchResult().length - 1) === this.state.selectedIdx ? 0 : this.state.selectedIdx + 1,
			}));
		} else if (event.key === 'ArrowUp') {
			//console.debug( this.state.selectedIdx, this.getSearchResult().length - 1 );
			this.setState(Object.assign({}, this.state, {
				selectedIdx: this.state.selectedIdx === 0 ? this.getSearchResult().length - 1 : this.state.selectedIdx - 1,
			}));
		} else {
			this.setState(Object.assign({}, this.state, {
				searchText: event.currentTarget.value || '',
			}));
		}
	}

	getSearchResult(): IApplicationsItem[] {
		if (this.state.searchText.length <= 0) {
			return [];
		} else {
			return applications.filter((app: IApplicationsItem) => app.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1);
		}
	}
}