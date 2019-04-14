import * as React from 'react';

import './AppItem.scss';


let timer: number = 0;
let delay: number = 200;
let preventSingleClick: boolean = false;

interface IAppItemProps {
  name: string;
  isDisabled: boolean;
}

export class AppItem extends React.Component<IAppItemProps, {}> {
  render() {
    const className = 'app ' + (this.props.isDisabled ? 'app--disabled' : '');
    return (
      <li className={className}>
        <a href="javascript:void(0);" onClick={this.handleClick.bind(this)} onDoubleClick={this.handleDoubleClick.bind(this)}>{this.props.name}</a>
      </li>
    );
  }

  doClickAction() {
    window.alert(`Showing description for app '${this.props.name}' ...`);
  }

  doDoubleClickAction() {
    window.alert(`Starting app '${this.props.name}' ...`);
  }

  handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    let me = this;
    timer = window.setTimeout(function() {
      if (!preventSingleClick) {
        me.doClickAction();
      }
      preventSingleClick = false;
    }, delay);
  }

  handleDoubleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    window.clearTimeout(timer);
    preventSingleClick = true;
    this.doDoubleClickAction();
  }
}