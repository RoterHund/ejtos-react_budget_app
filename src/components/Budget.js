import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { currency } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
 

    const handleBudgetChange = (event) => {
        if(newBudget > 20000) {
            alert("The maximum budget is £20,000");
        } else if(newBudget < totalExpenses) {
            alert("Budget cannot be lower than spending");
        } else {
            (setNewBudget(event.target.value));
        }       
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: { currency }{budget}</span><br></br>
<label>{ currency }</label>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
