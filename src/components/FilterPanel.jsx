import React from "react";
import "./FilterPanel.css";
const FilterPanel = ({
    selectedFilterItemId,
    setSelectedFilterItemId,
    todoList,
    searchText,
    setSearchText,
}) => {
    const FILTER_ITEM = [
        {
            id: "All",
            label: "All",
            iconPath: "./public/inbox.png",
            num: "All-num",
        },
        {
            id: "Important",
            label: "Important",
            iconPath: "./public/flag.png",
            num: "Important-num",
        },
        {
            id: "Completed",
            label: "Completed",
            iconPath: "./public/check.png",
            num: "Completed-num",
        },
        {
            id: "Deleted",
            label: "Deleted",
            iconPath: "./public/delete.png",
            num: "Deleted-num",
        },
    ];
    const countByFilter = todoList.reduce(
        (acc, cur) => {
            let newAcc = { ...acc };
            if (cur.isImportant === true) {
                newAcc = { ...acc, Important: newAcc.Important + 1 };
            }
            if (cur.isComplete === true) {
                newAcc = { ...acc, Completed: newAcc.Completed + 1 };
            }
            if (cur.isDeleted === true) {
                newAcc = { ...acc, Deleted: newAcc.Deleted + 1 };
            }
            return newAcc;
        },
        { All: todoList.length, Important: 0, Completed: 0, Deleted: 0 }
    );

    return (
        <div className="filter-panel">
            <input
                type="text"
                name="search-todoitem"
                placeholder="Search"
                className="searchbox"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
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
                                <p>{countByFilter[filterItem.id]}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterPanel;
