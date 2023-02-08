import ExpenseDate from './ExpenseDate';
import Expense from './Expense';
import './ExpenseItem.css';

function ExpenseItem(props){

    // const expenseDate = new Date(2023,1,7);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <Expense amount={props.amount}></Expense>
                {/* <div className='expense-item__price'>${props.amount}</div> */}
            </div>
        </div>
    )
}

export default ExpenseItem;