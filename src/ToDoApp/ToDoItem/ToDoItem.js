import React from 'react';
import './ToDoItem.css'
let ToDoItem = ({ name, isChecked, changeChecked, removeItem, shakeItemIndex, index }) => {

  return (
    <div className="col-s-12 col-5 row-wrap">
      <div className={`row-item  ${(shakeItemIndex === index) ? 'shake-animation row-item-duplicate' : null}`}>
        <label>
          <input type="checkbox" checked={isChecked} onChange={(e) => { changeChecked(e, name) }} /> {name}
        </label>
        <div className="close-button unselectable" onClick={() => { removeItem(name) }}>
          x
      </div>
      </div>
    </div>
  );
}

export default ToDoItem;