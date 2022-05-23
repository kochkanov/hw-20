import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { Component } from "react";

class NewExpense extends Component {
  saveDataHandler(data) {
    const objectWithId = {
      ...data,
      id: Math.random().toString(),
    };
    this.props.onSaveDataToList(objectWithId);
  }
  render() {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveData={this.saveDataHandler.bind(this)} />
      </div>
    );
  }
}

export default NewExpense;
