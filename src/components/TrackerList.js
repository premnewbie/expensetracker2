import React from 'react'

export default function TrackerList({items,deleteItem}) {

  return (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            {items?.map((item) => <tr key={item}>
                <th>{item.date}</th>
                <th>{Math.abs(item.Amount)}</th>
                <th>{item.Description}</th>
                <th>{item.Type} <button onClick={() => deleteItem(item)}>Delete Tranaction</button></th>
            </tr>)}
        </tbody>
    </table>
  )
}
