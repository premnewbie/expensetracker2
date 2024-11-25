import React, { useState } from 'react'

export default function AddItem({addItem}) {

    const [amount,setAmount] = useState(0);
    const [des,setDes] = useState('');
    const [type,setType] = useState('expense');


    const handleTransaction = (e) => {
        e.preventDefault();
        if(!amount || !des || !type){
            alert("Please fill the required fields")
            return
        }
        const date = new Date();
        const usDate = date.toLocaleString('en-US'); 
        const newItem = {
            Amount: type==='income'?Number(amount):Number(-amount),
            Description: des,
            Type: type,
            date: usDate
        }
        addItem(newItem);
    }

  return (
    <div>
        <div>
            <label>Enter amount: </label>
            <input type='number' value={amount} onInput={(e) => setAmount(e.target.value)} required/>
        </div>
        <div>
            <label>Enter Description: </label>
            <input type='text' value={des} onInput={(e) => setDes(e.target.value)} required/>
        </div>
        <div>
            <label>Select the type of transaction</label>
            <select onChange={e => setType(e.target.value)} required>
                <option value='expense'>Expense</option>
                <option value='income'>Income</option>
            </select>
        </div>
        <button onClick={handleTransaction}>Add transaction</button>
    </div>
  )
}
