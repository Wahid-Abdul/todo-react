import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import './ToDo.css'
import SavePopup from "./SavePopup";
import UploadPopup from "./UploadPopup";

const LOCAL_TODO = "TO_DO_LIST"
const CLEAR_ALL_TASKS = "All your tasks have been cleared."
let ToDo = (props) => {

  const [newTask, setNewTask] = useState();
  const [toDoList, setToDoListState] = useState([]);
  const [backupToDoList, setBackupToDoList] = useState([]);
  const [shakeItemIndex, setShakeItemIndex] = useState(-1);
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showUploadPopup, setShowUploadPopup] = useState(false);


  let setToDoList = (toDoList) => {

    setBackupToDoList(toDoList)
    setToDoListState(toDoList)
  }

  let addTask = () => {

    let toDo = [...toDoList];
    var foundIndex = toDo.findIndex(element => element.name === newTask);
    if (foundIndex > -1) {
      setShakeItemIndex(foundIndex)
      setTimeout(() => {
        setShakeItemIndex(-1)
      }, 1000);
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

  let getSavedItems = () => {
    let localTODO = localStorage.getItem(LOCAL_TODO)
    if (localTODO) {
      setToDoList(JSON.parse(localTODO))
    }
  }

  let saveItems = (saveList = toDoList) => {
    localStorage.setItem(LOCAL_TODO, JSON.stringify(saveList))
  }

  let updateImportedList = (saveList) => {
    setToDoList(saveList)
    saveItems(saveList)
  }

  let undoClearAll = () => {
    if (backupToDoList.length > 0) setToDoList(backupToDoList)
  }


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

  useEffect(getSavedItems, [])
  useEffect(saveItems, [toDoList])
  useEffect(undoClearAll, [props.undoFlag])

  const disbaleClearAll = toDoList.length === 0;
  return (
    <>
      {showSavePopup && <SavePopup toDoList={toDoList} setShowSavePopup={setShowSavePopup} />}
      {
        showUploadPopup &&
        <UploadPopup toDoList={toDoList} updateImportedList={updateImportedList}
          setShowUploadPopup={setShowUploadPopup}
        />
      }
      <div className="header container">
        {/* <a className="button" href="#savePopup"> */}
        <button className="saveFileView" onClick={() => { setShowSavePopup(true) }}>
          SAVE
          </button>
        {/* </a> */}
        {/* <a className="button" href="#uploadPopup"> */}
          <button className="saveFileView" onClick={() => { setShowUploadPopup(true) }}>
            UPLOAD
          </button>
        {/* </a> */}
      </div>
      <div className="row space-items">

        {
          toDoList.map((item, index) => (
            <ToDoItem
              name={item.name}
              key={item.name}
              isChecked={item.isChecked}
              changeChecked={changeChecked}
              removeItem={removeItem}
              index={index}
              shakeItemIndex={shakeItemIndex}
            />
          ))
        }
      </div>
      <div className="container">
        <div className="input-container">
          <input onChange={e => setNewTask(e.target.value)} onKeyDown={search} className="task-input" />
        </div>

        <div className=" row button-container">
          <button className={`base-button clear-button col-3 col-s-12 ${disbaleClearAll ? 'clear-button-disabled' : 'clear-button'}`}
            onClick={clearTasks}
            disabled={disbaleClearAll ? true : false}
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
