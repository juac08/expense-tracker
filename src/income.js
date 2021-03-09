import React from 'react'
import {useGlobalContext} from './context'

const Income= () => {
    const { total, income, expense } = useGlobalContext();
    
    return (
    <>
     <article>
    <div className='title'>
    <h1>Your Balance: $ {total}</h1>
    <div className='underline'></div>
    </div>
    <div className='header'>
    <div>
    <h1>Income</h1>
    <h3 style={{color:'green'}}>$ {income}</h3>
    </div>
    <div>
    <h1>Expense</h1>
     <h3 style={{color:'red'}}>$  {expense}</h3>
     </div>
    </div>
    </article>
        </>
    )
}

export default Income;
