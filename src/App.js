import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUserRequest } from './actions/users';
class App extends Component {
  constructor(props) {
    super(props);
    // this.props.getUserRequest();
  }
  render() {
    return (
      <>

      </>
    );

  }
  componentDidMount() {
    this.props.getUserRequest()
  }
}
export default connect(null, {
  getUserRequest
})(App);