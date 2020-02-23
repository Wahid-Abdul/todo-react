import React, { useState } from 'react';
import './toast.css'
let Toast = () => {

    return (
        <div id="toast">
            <button id="img">UNDO</button>
            <div id="desc">A notification message..</div>
        </div>
    );
}

export default Toast;