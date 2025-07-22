import { useState, useEffect } from 'react'
import './App.css'
import { getListItems } from './utils/getListItems';

function App() {
  const [listItems, setListItems] = useState([]);

  const handleAddItem = () => {
    setListItems(prevItems => {
      const id = Math.random() * 10000;
      const newItem = { id: id, name: `Item ${id}`};
      const updatedItems = {...prevItems, newItem};
      return updatedItems;
    })
  }

  useEffect(() => {
    const listItems = getListItems();
    setListItems(listItems);
  }, []);

  return (
    <div>
      <h1>CI / CD Test 2</h1>
      <p>This is a practise project to learn about CI / CD pipelines</p>

      <button onClick={handleAddItem}>+ Add item</button>
      
      {listItems.map(item => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
}

export default App
