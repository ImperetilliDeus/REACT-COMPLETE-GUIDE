import './Expense.css'

function Expense(props){
    const amount = props.amount;
    return(
        <div className='expenses'>{amount}</div>
    );

}

export default Expense;