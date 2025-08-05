import React from "react";
import "./FilterPanel.css";
import { useState } from "react";
const FilterPanel = ({ selectedFilterItemId, setSelectedFilterItemId }) => {
    const FILTER_ITEM = [
        { id: "All", label: "test", iconPath: "./public/inbox.png" },
        { id: "Important", label: "test2", iconPath: "./public/flag.png" },
        { id: "Completed", label: "COMPLETED", iconPath: "./public/check.png" },
        { id: "Deleted", label: "DELETED", iconPath: "./public/delete.png" },
    ];
    return (
        <div className="filter-panel">
            <input type="text" />
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
