import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
// import './ExpenseList.css'
import { Component } from 'react'


class ExpensesList extends Component{

    render(){
        return(
        <Card className = 'expenses'>
            {this.props.expenses.map((element)=>{
                return(
                    <ExpenseItem
                    date={element.date}
                    text={element.title}
                    price={element.amount}
                    key={element.id}
                    />
                )
            })};
        </Card>
    )
    }
    
}
export default ExpensesList