import React, { useState } from 'react';
let UploadPopup = ({ updateImportedList }) => {

    const [importedTasks, setImportedTasks] = useState([]);
    // const [enableDate, toggleDateFlag] = useState(false);

    let validateImportedTasks = (tasks) => {
        let isValid = true
        tasks.map((task) => {
            if (Object.keys(task).length !== 2) {
                isValid = false;
                return
            }
            if (typeof (task.name) !== 'string' && typeof (task.name) !== 'number') {
                isValid = false;
                return
            }
            if (typeof (task.isChecked) !== 'boolean') {
                isValid = false;
                return
            }
        })
        return isValid;

    }


    let importToDolist = () => {
        updateImportedList(importedTasks)
        setImportedTasks([])
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;


        var reader = new FileReader();
        reader.onload = function () {
            let dataURL = reader.result;
            let base64string = dataURL.split(',')[1];
            let jsonData = JSON.parse(atob(base64string))
            if (validateImportedTasks(jsonData)) {
                setImportedTasks(jsonData)
            }
        };
        reader.readAsDataURL(files[0]);

    }

    const disableImport = importedTasks.length === 0;
    return (
        <div id="uploadPopup" className="overlay">
            <div className="popup">
                <a className="close" href="#">&times;</a>
                <div className="popup-header">
                    Upload
                </div>
                <br />
                <div
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    className="upload-space"
                >
                    <div className="drag-drop-plus">+</div>
                </div>
                {
                    importedTasks.map((task, index) =>
                        <div>{index + 1}.{task.name}</div>
                    )
                }
                        <a className="button" href="#">

                <button className={`base-button ${disableImport ? 'clear-button-disabled' : 'add-button'} col-3 col-s-12`}
                    onClick={importToDolist}
                    disabled={disableImport ? true : false}
                >
                    IMPORT
                </button>
                </a>

            </div>
        </div>
    )
}


export default UploadPopup;
