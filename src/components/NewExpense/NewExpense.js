import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


function NewExpense(props) {
    let [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
        console.log(expenseData);
    }

    function startEditingHandler(){
        setIsEditing(true);
    }

    function stopEditingHandler(){
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
            {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>)}
        </div>
    );
};

export default NewExpense;