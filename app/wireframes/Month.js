'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { month } from '../mock-data';

class Month extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="wrapperMonth">
        <div className='nav-bar'>
            <div className='button-nav-bar'>
                <h1>This Month</h1>
            </div>
            <div className='search-bar-wrapper'>
                <div className='search-bar'>
                &nbsp;
                </div>
            </div>
            <div className='leave-month-page'>
                <img onClick={()=> this.props.closeMonthPage()} className="image-item-list" src={'../img/back-icon.png'}/>
            </div>
        </div>
        <div className='top-column-names'>
        </div>
        <div className='content-month'>
            {month.map((data, i) => {
                return (
                    <div className='row-data-month' key={i}>
                        <div className='icon-item-month'>
                            <div className='circle-month'></div>
                        </div>
                        <div className='expenditure'>
                            <h1>{data.expenditure}</h1>
                            <h1>{data.date}</h1>
                        </div>
                        <div className='values'>
                            <h1>{data.amount}</h1>
                            <h1>{data.balance}</h1>
                        </div>
                     </div>
                );
            })}
        </div>
      </div>
      );
  }
};

export default Month;