'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { listData } from '../mock-data'

let {
    Component
} = React;


class BarIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 1,
        };
    }
    
    componentDidMount() {
        if (this.props.size) {
            let el = document.getElementsByClassName(`bar-indicator-wrapper-${this.props.size}`)
            el[0].onresize = function(){console.log('resizing')};
            console.log(el);
            if ( el.length) {
                this.setState({width : el[0].offsetWidth });
            }    
            return;    
        }
        
        let el = document.getElementsByClassName('bar-indicator-wrapper')
        if ( el.length) {
            this.setState({width : el[0].offsetWidth });    
        }
    }
    
    render() {
        let {color, portion} = this.props;
        return (
            <div 
                style={{backgroundColor: `${color}`}}
                className='bar-indicator-content'>&nbsp;</div>
        );
    }
}

export default BarIndicator;