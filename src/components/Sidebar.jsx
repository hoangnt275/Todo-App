import React from "react";
import "./Sidebar.css";
import { useState } from "react";
const Sidebar = (props) => {
    const data = props.todoItem;
    const [name, setName] = useState(data.name);
    const [isImportant, setIsImportant] = useState(data.isImportant);
    const [isComplete, setIsComplete] = useState(data.isComplete);
    const [isDeleted, setIsDeleted] = useState(data.isDeleted);
    const handleSave = () => {
        const newTodoItem = { ...data, name, isComplete, isImportant, isDeleted };
        props.handleTodoItemChange(newTodoItem);
        props.setShowSideBar(false);
    };
    return (
        <div className="sidebar">
            <form action="" className="sb-form">
                <div>
                    <label htmlFor="sb-name">Todo Name</label>
                    <input
                        id="sb-name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>
                </div>
                <div>
                    <label htmlFor="sb-complete">Is Complete?</label>
                    <input
                        id="sb-complete"
                        type="checkbox"
                        name="isComplete"
                        checked={isComplete}
                        onChange={() => {
                            setIsComplete(!isComplete);
                        }}
                    ></input>
                </div>
                <div>
                    
                    <label htmlFor="sb-important">Is Important?</label>
                    <input
                        id="sb-important"
                        type="checkbox"
                        name="isImportant"
                        checked={isImportant}
                        onChange={() => {
                            setIsImportant(!isImportant);
                        }}
                    ></input>
                </div>
                <div>
                    
                    <label htmlFor="sb-important">Is Deleted?</label>
                    <input
                        id="sb-deleted"
                        type="checkbox"
                        name="isDeleted"
                        checked={isDeleted}
                        onChange={() => {
                            setIsDeleted(!isDeleted);
                        }}
                    ></input>
                </div>
            </form>

            <div className="sb-footer">
                <button onClick={handleSave}>Save</button>

                <button
                    onClick={() => {
                        props.setShowSideBar(false);
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
