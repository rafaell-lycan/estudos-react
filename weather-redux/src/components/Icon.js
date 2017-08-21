import React, {Component} from 'react';
import getIcon from '../utils/icons';

export class Icon extends Component {
    render() {
        return <img className="icon" src={getIcon(this.props.icon)} />
    }
}