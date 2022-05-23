import "./ExpensesFilter.css";
import { Component } from "react";

class ExpensesFilter extends Component {
  dropdownChangeHandler = (event) => {
    this.props.onChangeFilter(event.target.value);
  };

  render() {
    return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select
            value={this.props.selected}
            onChange={this.dropdownChangeHandler}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
    );
  }
}
export default ExpensesFilter;
