import React, { Component, Fragment } from 'react';
import './App.css'


class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          TAXING
        </div>
        <div className="subHeader">
          월급 실수령액 계산기
        </div>
        <div className="salaryInput"></div>
        <div className="salaryResult"></div>
      </Fragment>
    );
  }
}

export default App;
