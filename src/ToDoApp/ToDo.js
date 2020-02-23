import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import './ToDo.css'
import { launch_toast } from "../common/utils";

const LOCAL_TODO = "TO_DO_LIST"
let ToDo = () => {

  const [newTask, setNewTask] = useState();
  const [toDoList, setToDoList] = useState([]);

  let addTask = () => {
    let toDo = [...toDoList];
    var found = toDo.find(
      element => element.name === newTask
    );
    if (found) {
      alert("The task is already available in your list");
      return;
    }
    if (newTask) {
      toDo.push({ name: newTask, isChecked: false });
      setToDoList(toDo);

    }
  };

  let clearTasks = () => {
    // launch_toast("Message")
    setToDoList([]);
  }

  useEffect(() => {
    let localTODO = localStorage.getItem(LOCAL_TODO)
    if (localTODO) {
      setToDoList(JSON.parse(localTODO))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_TODO, JSON.stringify(toDoList))
  }, [toDoList])

  let search = (event) => {
    if (event.keyCode === 13) {
      addTask()
    }
  }


  let changeChecked = (e, name) => {

    let toDo = [...toDoList];
    let isChecked = e.target.checked
    toDo = toDo.map(obj =>
      obj.name === name ? { ...obj, isChecked } : obj
    );
    setToDoList(toDo)

  }

  let removeItem = (name) => {

    let toDo = [...toDoList];
    let indexDel;
    toDo.map((obj, index) => {
      if (obj.name === name) {
        indexDel = index
        return
      }
    }
    );
    toDo.splice(indexDel, 1)
    setToDoList(toDo)
  }
  
  return (
    <>
      <div className="row space-items">

        {toDoList.map(item => (
          <ToDoItem
            name={item.name}
            key={item.name}
            isChecked={item.isChecked}
            changeChecked={changeChecked}
            removeItem={removeItem}
          />
        ))}
      </div>
      <div className="container">
        <div className="input-container">
          <input onChange={e => setNewTask(e.target.value)} onKeyDown={search} className="task-input" />
        </div>

        <div className=" row button-container">
          <button className="base-button clear-button col-3 col-s-12"
            onClick={clearTasks}
          >
            CLEAR ALL
          </button>
          <button className=" base-button add-button col-3 col-s-12"
            onClick={addTask}
          >
            ADD A TASK
          </button>


        </div>

      </div>
    </>
  );
};

export default ToDo;
