'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import List from './wireframes/List';
import Summary from './wireframes/Summary';
import Month from './wireframes/Month';

class Wireframe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        summarypage: false,
        monthpage: false
    };
  }
  
  openSummaryPage() {
      this.setState({summarypage: true, monthpage: false});
  }
  
  closeSummaryPage() {
      this.setState({summarypage: false, monthpage: false});
  }
  
  openMonthPage() {
      this.setState({summarypage: true, monthpage: true});
  }
  
  closeMonthPage() {
      this.setState({summarypage: true, monthpage: false});
  }
  
  render() {
    return (
      <div className='globalWrapper'>
        <List onClickSummary={()=>this.openSummaryPage()}/>
        
        {!!this.state.summarypage && (
            <Summary 
                onCloseSummary={()=>this.closeSummaryPage()} 
                openMonthPage={()=>this.openMonthPage()} /> )}
                
        {!!this.state.monthpage && <Month closeMonthPage={()=> this.closeMonthPage()}/>}
        
      </div>
      );
  }
};


ReactDOM.render(<Wireframe />, document.getElementById('react'));
