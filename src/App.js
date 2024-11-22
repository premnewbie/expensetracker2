import { useEffect, useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import TrackerList from './components/TrackerList';

function App() {

  const [balance,setBalance] = useState(0);
  const [items,setItems] = useState([]);

  useEffect(() => {
    const ans = items.reduce((acc,item) => item.Amount+acc,0)
    setBalance(ans)
  },[items])

  const addItem = (item) => {
    setItems(prev => [...prev,item])
  }

  const deleteItem = (item) => {
    setItems(items.filter((val) => val!==item))
  }

  return (
    <div className="App">
        <h1>Available Balance: {balance}</h1>
        <AddItem items={items} addItem={addItem} deleteItem={deleteItem}/>
        <TrackerList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
