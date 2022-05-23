import React from "react";
import "./App.css";
// import ExpenseItem from './/components/Expenses/ExpenseItem';
import Expenses from "./components/Expenses/Expenses";
import ".//components/Expenses/ExpenseList";
// import ExpenseForm from './components/NewExpense/ExpenseForm';
import NewExpense from "./components/NewExpense/NewExpense";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

class App extends React.Component{
constructor(){
  super()
 this.state = {
   expData: expenses
 }
}
   saveDataToList=(newdata)=>{
    this.setState((prevData) => {
      return {expData: [...prevData.expData,newdata]};
    });
  }

render(){
  return (
    <div className="App">
      <NewExpense onSaveDataToList={this.saveDataToList} />

      <Expenses expenses={this.state.expData} />
    </div>
  );
}
  
}

export default App;
