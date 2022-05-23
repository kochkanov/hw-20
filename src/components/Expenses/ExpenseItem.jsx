// import React, { useState } from 'react'
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { Component } from "react";

class ExpenseItem extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.title };
  }
  // const [text, setText]= useState(props.title)

  clickHandler() {
    this.setState("hello");
  }

  render() {
    return (
      <div className="expense-item">
        <ExpenseDate date={this.props.date} />
        <div className="expense-item__description">
          <h2>{this.state.text}</h2>
          <div className="expense-item__price">{this.props.price}</div>
        </div>
        <button onClick={this.clickHandler}>change title</button>
      </div>
    );
  }
}

export default ExpenseItem;
