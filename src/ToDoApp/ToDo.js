import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";

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
    if (event.keyCode == 13) {
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
  return (
    <>
      <div className="row">

        {toDoList.map(item => (
          <ToDoItem
            name={item.name}
            key={item.name}
            isChecked={item.isChecked}
            changeChecked={changeChecked}

          />
        ))}


      </div>
      <input onChange={e => setNewTask(e.target.value)} onKeyDown={search} />
      <button className=""
        onClick={() => {
          addTask();
        }}
      >
        Add a task
     </button>
    </>
  );
};

export default ToDo;
