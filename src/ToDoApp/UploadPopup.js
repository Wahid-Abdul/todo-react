import React, { useState, useEffect } from 'react';
let UploadPopup = ({ updateImportedList, setShowUploadPopup }) => {

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
        setShowUploadPopup(false)
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

    const onReaderLoad = (event) => {
        console.log(event.target.result);
        let jsonData = JSON.parse(event.target.result);
        if (validateImportedTasks(jsonData)) {
            setImportedTasks(jsonData)
        }
        // closePopup();
    }

    const onChange = (event) => {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    useEffect(() => {
        document.getElementById('fileElem').addEventListener('change', onChange);
    }, [])


    const disableImport = importedTasks.length === 0;
    return (
        <div id="uploadPopup" className="overlay">
            <div className="popup">
                <div className="close" onClick={() => {setShowUploadPopup(false)}}>&times;</div>
                <div className="popup-header remove-margin">
                    Upload
                </div>
                <br />
                <label>
                    <input type="file" style={{ opacity: 0, display: "none" }} id="fileElem" ></input>
                    <div
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}
                        className="upload-space"
                    >
                        <div className="drag-drop-plus">+</div>
                    </div>
                </label>
                {
                    importedTasks.filter((i, index) => (index < 2)).map((task, index) =>
                        <div>{index + 1}. {task.name}</div>
                    )
                }
                {
                    importedTasks.length > 5 && '...'
                }
                <a className="button" href="#">

                    <button className={`base-button ${disableImport ? 'clear-button-disabled' : 'add-button'} col-12 col-s-12 margin-left-remove`}
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
