import React, { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { Style } from './components/style';


function App() {
  const [listId, setListId] = useState<number[]>([]);

  useEffect(() => {
    const storeListIds = localStorage.getItem("todoListId");
    if(storeListIds){
      setListId(JSON.parse(storeListIds))
    }
  }, []);

  function createNewList(){
    const id = Math.floor(Math.random()*1000);
    setListId((prevListId)=>{
      const newListId = [...prevListId,id];
      localStorage.setItem("todoListId",JSON.stringify(newListId))
      return newListId;
    }
      );
  }

  function clearData(){
     localStorage.clear();
     setListId([]);
  }

  return (
    <>
    <Style>
    <div className='todo'>
      <h1>ToDo List with React ts<br/></h1>

      <button className='appBtn' onClick={createNewList}>Create New List</button>
      <button className='appBtn' onClick={clearData}>Clear Data</button>
      {listId.map((id)=>(
        <TodoItem key={id} id={id}/>
        ))}
    </div>
        </Style>
        </>
  );
}

export default App;
