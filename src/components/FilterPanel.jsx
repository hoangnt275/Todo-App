import React from "react";
import "./FilterPanel.css";
import {  useRef } from "react";
const FilterPanel = ({ selectedFilterItemId, setSelectedFilterItemId, handleSearch }) => {
     const inputRef = useRef();
    const FILTER_ITEM = [
        { id: "All", label: "All", iconPath: "./public/inbox.png" },
        { id: "Important", label: "Important", iconPath: "./public/flag.png" },
        { id: "Completed", label: "Completed", iconPath: "./public/check.png" },
        { id: "Deleted", label: "Deleted", iconPath: "./public/delete.png" },
    ];
    return (
        <div className="filter-panel">
            <input type="text" name="search-todoitem" placeholder="Search" className="searchbox" ref={inputRef} onKeyDown={(e)=>{
                
         if( e.key==="Enter") {const value= e.target.value;
            handleSearch(value);
        inputRef.current.value = ""}
        
            }} />
            <div className="filter-item-list">
                {FILTER_ITEM.map((filterItem) => {
                    return (
                        <div
                            key={filterItem.id}
                            onClick={() => {
                                setSelectedFilterItemId(filterItem.id);
                            }}
                            className={`filter-item ${
                                filterItem.id === selectedFilterItemId
                                    ? "selected"
                                    : ""
                            }`}
                        >
                            <div className="filter-name">
                                <img src={filterItem.iconPath} alt="" />
                                <p>{filterItem.label}</p>
                            </div>
                            <div className="filter-num">
                                <p>22</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterPanel;
