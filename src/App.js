import React from "react";
import "./App.css";
import ToDo from './ToDoApp/ToDo'
import './common/grid.css'
import Toast from "./common/Toast";

let App = () => {
  let launch_toast = () => {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
  }
  return (
    <>
      {/* <div id="toast"><div id="img">Icon</div><div id="desc">A notification message..</div></div> */}
      <Toast />
      <ToDo launch_toast={launch_toast} />
    </>
  );
}

export default App;

// To deploy to github pages, use $npm run deploy
