import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import './ToDo.css'

const LOCAL_TODO = "TO_DO_LIST"
const CLEAR_ALL_TASKS = "All your tasks have been cleared."
let ToDo = (props) => {

  const [newTask, setNewTask] = useState();
  const [toDoList, setToDoListState] = useState([]);
  const [backupToDoList, setBackupToDoList] = useState([]);

  console.log('backupToDoList changed 1', toDoList)


  let setToDoList = (toDoList) => {

    console.log('backupToDoList changed ', toDoList)
    setBackupToDoList(toDoList)
    setToDoListState(toDoList)
    console.log(backupToDoList)

  }

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
    props.launch_toast(CLEAR_ALL_TASKS)
    setToDoListState([]);
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

  useEffect(() => {
    if (backupToDoList.length > 0) setToDoList(backupToDoList)
  }, [props.undoFlag])

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
