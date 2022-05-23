import { Component } from "react";
import "./ExpenseForm.css";

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    };
  }
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')

  // const [enteredDate, setEnteredDate] = useState('')

  titleHandler = (e) => {
    this.setState({
      enteredTitle: e.target.value,
    });
  };

  amountHandler = (e) => {
    this.setState({ enteredAmount: e.target.value });
  };
  dateHandler = (e) => {
    this.setState({ enteredDate: e.target.value });
  };

  submitHanlder = (e) => {
    e.preventDefault();
    const expenseData = {
      title: this.state.enteredTitle,
      amount: this.state.enteredAmount,
      date: new Date(this.state.enteredDate),
      //         id: Math.random().toString()
    };
    this.props.onSaveData(expenseData);
    this.setState({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHanlder}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            <input
              type="text"
              value={this.state.enteredTitle}
              onChange={this.titleHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>amount</label>
            <input
              value={this.state.enteredAmount}
              type="number"
              onChange={this.amountHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={this.dateHandler}
              type="date"
              value={this.state.enteredDate}
              min="2000-01-01"
              max="2023-01-01"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
