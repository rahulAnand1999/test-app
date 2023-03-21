
import React ,{ useState } from 'react';
import './App.css';
import { Task } from './model/task';

function App() {
  const [val,setVal] = useState(new Task());
  const [listItem,setListItem] = useState([]);
  const handleChange = (e) =>{
    let task = new Task();
    if(val.id) {
      task.id = val.id;
      task.name = e;
      setVal(task);
    }else {
      task.name = e;
      setVal(task);
    }
  }
  
const handleClick = () => {

  if(val.name === '') {
    return
  } else if(val.id) {
    listItem.map((e)=> {
      if(e.id === val.id) {
        e.name = val.name;
      }
      return e;
    });
  } else {
    let length = listItem.length;
    val.id = listItem[length - 1] ? listItem[length - 1].id + 1:1;
    const list = [...listItem,val]
    setListItem(list);
  }
  setVal(new Task());
}
const deleteItem = (e)=> {
  let newList = listItem.filter((t)=> t !== e);
  setListItem(newList);
}
const editItem = (e)=> {
  setVal(e);
}
  return (
    <>
      <div>
        <input 
          type={'text'}
          value={val.name}
          onChange={(e)=>handleChange(e.target.value)}
        />
        <button onClick={handleClick}>{val.id?'Replace':'Add'}</button>
      </div>
      <div>
        {listItem.map((e)=> {
          return <div key={e.id}>
                    <h1>{e.name}</h1>
                    <button onClick={()=> deleteItem(e)}>Delete</button>
                    <button onClick={()=> editItem(e)}>Edit</button>
                </div>
        })}
      </div>
    </>
  );
}

export default App;
