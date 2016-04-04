'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { listData } from '../mock-data';
import BarIndicator from '../components/BarIndicator';

let {
    Component
} = React;



class ItemList extends Component {
    render() {
        let {
            img, 
            type, 
            amount, 
            barIndicator } = this.props.data;
        
        let { onClickSummary } =  this.props;
        
        return (
            <div className="item-list" onClick={()=>{onClickSummary();}}>
                <div className='icon-item-list'>
                    <img className="image-item-list" src={`../img/${img}`}/>
                </div>
                <div className='item-list-text'>
                    <h1 className='list-type'>{type}</h1>
                    <h1 className='list-amount'>{amount}</h1>
                </div>
                {!!barIndicator && (
                    <div className='bar-indicator-wrapper'>
                        <BarIndicator color={'#2981E8'} portion={0.65}/>
                    </div>
                )}
            </div>
        );
    }
}


class List extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="wrapperList">
        {listData.map((data, i)=>{
            return (
                <ItemList data={data} key={i} onClickSummary={()=>{this.props.onClickSummary();}}/>
            );
        })}
      </div>
      );
  }
};

export default List;