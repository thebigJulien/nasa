import React from 'react';
import '../sass/App.scss';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  
  render() { 
    return ( <div className="app">NASA</div> );
  }
}


const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchData}) (App);
