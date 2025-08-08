import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import { CATEGORIES_ITEM } from "../../constant";
const Sidebar = (props) => {
    const data = props.todoItem;
    const [name, setName] = useState(data.name);
    const [isImportant, setIsImportant] = useState(data.isImportant);
    const [isComplete, setIsComplete] = useState(data.isComplete);
    const [isDeleted, setIsDeleted] = useState(data.isDeleted);
    const [category, setCategory] = useState("personal");
    const handleSave = () => {
        const newTodoItem = {
            ...data,
            name,
            isComplete,
            isImportant,
            isDeleted,
            category,
        };
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
                    <label htmlFor="sb-deleted">Is Deleted?</label>
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
                <div>
                    <label htmlFor="categories"></label>
                    <select
                        name="categories"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                    >
                        {CATEGORIES_ITEM.map((category) => {
                            return (
                                <option value={category.id} key={category.id}>
                                    {category.label}
                                </option>
                            );
                        })}
                    </select>
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
