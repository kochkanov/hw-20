// import React, { useState } from "react";
import { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
// import { render } from '@testing-library/react';

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = { filteredYear: "2022" };
  }

  // const [filteredYear, setfilteredYear] = useState("2022");

  filterChangeHandler(filteredYear) {
    this.setState({filteredYear});
  }

  render() { 
    const filteredExpenses = this.props.expenses.filter((elem) => {
      return elem.date.getFullYear().toString() === this.state.filteredYear;
    });
    return (
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={this.filterChangeHandler.bind(this)} value={this.state.filteredYear}/>
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 ? (
          <p>No expense Found</p>
        ) : (
          filteredExpenses.map((el) => (
            <ExpenseItem
              key={el.id}
              date={el.date}
              title={el.title}
              price={el.amount}
            />
          ))
        )}
      </Card>
    );
  }
}

export default Expenses;
