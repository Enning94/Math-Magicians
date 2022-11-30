import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <div className="row1">0</div>
        <div className="row2">
          <div className="row2-col1">AC</div>
          <div className="row2-col2">+/-</div>
          <div className="row2-col3">%</div>
          <div className="row2-col4">÷</div>
        </div>
        <div className="row3">
          <div className="row3-col1">7</div>
          <div className="row3-col2">8</div>
          <div className="row3-col3">9</div>
          <div className="row3-col4">x</div>
        </div>
        <div className="row4">
          <div className="row4-col1">4</div>
          <div className="row4-col2">5</div>
          <div className="row4-col3">6</div>
          <div className="row4-col4">-</div>
        </div>
        <div className="row5">
          <div className="row5-col1">1</div>
          <div className="row5-col2">2</div>
          <div className="row5-col3">3</div>
          <div className="row5-col4">+</div>
        </div>
        <div className="row6">
          <div className="row6-col1">0</div>
          <div className="row6-col2">.</div>
          <div className="row6-col3">=</div>
        </div>
      </div>
    );
  }
}
