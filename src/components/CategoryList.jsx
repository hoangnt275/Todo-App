import React, { useContext } from "react";
import "./CategoryList.css";
import { CATEGORIES_ITEM } from "../../constant";
import { AppContext } from "../../context/AppProvider";
const CategoryList = ({ todoList }) => {
    const { selectedCategoryId, setSelectedCategoryId } =
        useContext(AppContext);
    const countByCategory = todoList.reduce(
        (acc, cur) => {
            let newAcc = { ...acc };
            if (cur.category === "Personal") {
                newAcc = { ...acc, Personal: newAcc.Personal + 1 };
            }
            if (cur.category === "Travel") {
                newAcc = { ...acc, Travel: newAcc.Travel + 1 };
            }
            if (cur.category === "Company") {
                newAcc = { ...acc, Company: newAcc.Company + 1 };
            }
            if (cur.category === "Idea") {
                newAcc = { ...acc, Idea: newAcc.Idea + 1 };
            }
            return newAcc;
        },
        { Personal: 0, Company: 0, Travel: 0, Idea: 0 }
    );
    return (
        <div>
            <p>Categories</p>
            {CATEGORIES_ITEM.map((category) => {
                return (
                    <div
                        className={`category-item ${
                            category.id === selectedCategoryId
                                ? "selected"
                                : " "
                        }`}
                        key={category.id}
                        onClick={() => {
                            setSelectedCategoryId(category.id);
                        }}
                    >
                        <p>{category.label}</p>
                        <p>{countByCategory[category.id]}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CategoryList;
