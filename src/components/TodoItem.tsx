import React, { useEffect } from 'react'
import { useState } from 'react';
import {Style} from './style';

interface TodoListItem {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProp {
    id: number;
}

const TodoItem: React.FC<TodoListProp> = ({ id }) => {
    const [listItem, setListItem] = useState<TodoListItem[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [currentView, setCurrentView] = useState<string>('all');


    useEffect(() => {
     const storedItems=localStorage.getItem(`listItem_${id}`);
     const initialItems : TodoListItem[]= storedItems?JSON.parse(storedItems):[];
     setListItem(initialItems);
    }, [])
    

    function createNewElement() {
        const newItem: TodoListItem = { id: id, text: inputValue, completed: false };
        setListItem([...listItem, newItem]);
        localStorage.setItem(`listItem_${id}`,JSON.stringify([...listItem,newItem]));
        setInputValue('');
    }

    function deleteItem(index:number){
        const updateItems=[...listItem];
        updateItems.splice(index,1);
        setListItem(updateItems);
        localStorage.setItem(`listItem_${id}`,JSON.stringify(updateItems));
    }

    function completedItem(index:number){
        const updateItems=[...listItem];
        updateItems[index].completed = !updateItems[index].completed;
        setListItem(updateItems);
        localStorage.setItem(`listItem_${id}`,JSON.stringify(updateItems));
    }
    
    const filteredTodos = () => {
        switch (currentView) {
          case 'pending':
            return listItem.filter((item) => !item.completed);
          case 'completed':
            return listItem.filter((item) => item.completed);
          default:
            return listItem;
        }
      };

    return (
        <>
        <Style>
            <button className='allButton'
            onClick={()=>setCurrentView("all")}
            >All</button>
            <button className='pendingButton'
             onClick={()=>setCurrentView("pending")}
            >Active</button>
            <button className='completeButton'
             onClick={()=>setCurrentView("completed")}
            >Completed</button>
       
          <div className='header'>
          <h3>ToDo List {id}</h3>

            <input type="text"
                value={inputValue}
                onChange={(elem) => setInputValue(elem.target.value)}
                placeholder="Add your task..." />
            <button className="addBtn" 
            onClick={createNewElement}
            >Add Task</button></div>
            <ul id="todoList">
                {filteredTodos().map((item, index) => (
                    <li key={index} >
                     <button className='completeStatus'
                      onClick={()=>completedItem(index)}>
                        {item.completed ? "✔" : ""}
                      </button>
                      <span className={item.completed ?'complete-task': ""}>{item.text}</span>
                      <button className='close'
                      onClick={()=>deleteItem(index)}
                      >X</button>
                    </li>
                ))
                }
            </ul>
            <p>Completed Tasks:{listItem.filter((item)=>item.completed).length}</p>
            <p>Active Tasks: {listItem.filter((item)=>!item.completed).length}</p>
            <p>All Tasks:{listItem.length}</p>
            </Style>
        </>
    )
}

export default TodoItem;