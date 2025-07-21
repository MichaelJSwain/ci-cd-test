import { useState, useEffect } from 'react'
import './App.css'
import { getListItems } from './utils/getListItems';

function App() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const listItems = getListItems();
    setListItems(listItems);
  }, []);

  return (
    <div>
      <h1>CI / CD Test</h1>
      <p>This is a practise project to learn about CI / CD pipelines</p>

      <button>+ Add item</button>
      
      {listItems.map(item => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
}

export default App
