'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { summaryData, content_head } from '../mock-data'
import BarIndicator from '../components/BarIndicator';

let {
    Component
} = React;

class Summary extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='wrapperSummary'>
        <div className='top-summary'>
            <div className='title-head'>
                <h1>CREDIT CARDS SUMMARY</h1>
                <img onClick={()=> this.props.onCloseSummary()} className="image-item-list" src={'../img/back-icon.png'}/>  
            </div>
            <div className='bar-indicator-wrapper-large'>
                <BarIndicator color={'#50E3C2'} portion={0.65} size={'large'}/>
            </div>
            <div className='content-head'>
                {content_head.map((data, i) => {
                    return (
                        <div key={i} className='content-head-row'>
                            <h1>{data.description}</h1>
                            <h1>{data.amount}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className='bottom-summary'>
            {summaryData.map((data, i) => {
               return (
                   <div className='summary-row' key={i} onClick={()=>this.props.openMonthPage()}>
                        <div className='row-icon'>
                            <div className='circle'>
                            </div>
                        </div>
                        <div className='row-description'>
                            <h1>{data.title}</h1>
                            <h1>{data.amount}</h1>
                            <h1>Updated {data.updated} ago</h1>
                        </div>
                        <div className='bar-indicator-wrapper-medium'>
                            <BarIndicator color={'#50E3C2'} portion={0.45 + i*0.1} size={'medium'}/>
                        </div>
                   </div>
               ); 
            })}
        </div>
      </div>
      );
  }
};

export default Summary;