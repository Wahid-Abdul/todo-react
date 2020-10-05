import React, { useState } from 'react';
import { export2txt } from '../common/utils';
let SavePopup = ({ toDoList }) => {

    const [filename, setFilename] = useState('mytasks');
    const [enableDate, toggleDateFlag] = useState(false);


    let changeChecked = (e) => {
        let isChecked = e.target.checked
        toggleDateFlag(isChecked)
    }

    let saveToDoListFile = () => {
        let name = filename;
        if (enableDate) name += '-' + new Date()
        export2txt(name, toDoList)
    }
    return (
        <div id="savePopup" className="overlay">
            <div className="popup">
                <a className="close" href="#">&times;</a>
                <div className="popup-header">
                    Save File
                </div>
                <input className="filename" placeholder="Filename" onChange={e => setFilename(e.target.value)}></input>
                <br />
                <label className="date-toggle">
                    <input type="checkbox" onChange={(e) => { changeChecked(e) }} /> <span className="append-date-text">Append Date to filename</span>
                </label>
                <button className=" base-button add-button col-3 col-s-12"
                    onClick={saveToDoListFile}
                >
                    SAVE FILE
                </button>

            </div>
        </div>
    )
}


export default SavePopup;
