import React, { useState } from 'react';

let ToDoItem = ({name, isChecked, changeChecked}) => {

    return (
      <div>
        <label>
          <input type="checkbox" checked={isChecked} onChange={(e) => {changeChecked(e, name)}}/> {name}
        </label>
      </div>
    );
}

export default ToDoItem;