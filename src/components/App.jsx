import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component{

  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' component={NewTicketControl} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList: state
  };
};

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
