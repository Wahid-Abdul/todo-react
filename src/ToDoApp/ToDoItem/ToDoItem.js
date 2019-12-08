import React, { useState } from 'react';

let ToDoItem = ({ name, isChecked, changeChecked }) => {

  return (
    <div className="col-s-12 col-6">
      <label>
        <input type="checkbox" checked={isChecked} onChange={(e) => { changeChecked(e, name) }} /> {name}
      </label>
    </div>
  );
}

export default ToDoItem;