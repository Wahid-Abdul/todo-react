import React from 'react';
import './toast.css'
let Toast = (props) => {
    return (
        <div id="toast">
            <button id="img" onClick={props.undo}>UNDO</button>
            <div id="desc">{props.currentTask}</div>
        </div>
    );
}

export default Toast;