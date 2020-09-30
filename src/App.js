import React, {useState} from "react";
import "./App.css";
import ToDo from './ToDoApp/ToDo'
import './common/grid.css'
import Toast from "./common/Toast";

let App = () => {
  const [currentTask, setCurrentTask] = useState();
  const [undoFlag, reverseUndoFlag] = useState(true);

  let launch_toast = (task) => {

    var x = document.getElementById("toast")
    setCurrentTask(task)
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
  }

  let undo = () => {
    reverseUndoFlag(!undoFlag)
  }

  return (
    <>
      <Toast undo={undo} currentTask={currentTask} />
      <ToDo launch_toast={launch_toast} undoFlag={undoFlag} />
    </>
  );
}

export default App;

// To deploy to github pages, use $npm run deploy
