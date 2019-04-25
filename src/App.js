import React, { Component, Fragment } from 'react';
import './App.css';
// import Deduction from './Deduction';


class App extends Component {
  
  render() {
    return (
      <Fragment>
        <div className="header">
          TAXING
        </div>
        <div className="menu">
          <p>월급 실수령액 계산기</p>
        </div>
        <div className="salaryInput">
          <p>월 세전 급여를 입력해주세요</p>
          <input
            id="salary"
          />
          <span>원</span>
          <div>
            <button>
              계산하기
            </button>
          </div>

        </div>
        <div className="salaryOutput">
          <table className="outputTable">
            <th>공제항목</th>
            <th>공제 금액</th>
            <tr>
                <td>첫번째 칸</td>
                <td>두번째 칸</td>
            </tr>
            <tr>
                <td>첫번째 칸</td>
                <td>두번째 칸</td>
            </tr>
          </table>
          
        </div>
      </Fragment>
    );
  }
}





export default App;

// https://reactjs.org/
