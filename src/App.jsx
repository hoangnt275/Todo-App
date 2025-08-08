import TodoItem from "./components/TodoItem"; // ← thêm dòng này
import "./App.css";
import { useContext, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import CategoryList from "./components/CategoryList";
import { AppContext } from "../context/AppProvider";
function App() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            name: "Đi học thêm",
            isImportant: false,
            isComplete: false,
            isDeleted: false,
            category: "Personal",
        },
        {
            id: 2,
            name: "Đi chơi",
            isImportant: false,
            isComplete: true,
            isDeleted: false,
            category: "Personal",
        },
        {
            id: 3,
            name: "Đi ngủ",
            isImportant: true,
            isComplete: false,
            isDeleted: false,
            category: "Travel",
        },
    ]);

    const [activeTodoItemId, setActiveTodoItemId] = useState();
    const [selectedFilterItemId, setSelectedFilterItemId] = useState("All");
    const [showsidebar, setShowSideBar] = useState(false);
    const inputRef = useRef();
    const [searchText, setSearchText] = useState("");
    const handleTodoItemClick = (TodoId) => {
        setShowSideBar(true);
        setActiveTodoItemId(TodoId);
    };
    const { selectedCategoryId } = useContext(AppContext);

    const handleCompleteCheckboxChange = (todoId) => {
        const newTodoList = todoList.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, isComplete: !todo.isComplete };
            }
            return todo;
        });
        setTodoList(newTodoList);
    };
    const handleTodoItemChange = (newTodoItem) => {
        const newTodoList = todoList.map((todo) => {
            if (todo.id === newTodoItem.id) {
                return newTodoItem;
            }
            return todo;
        });
        setTodoList(newTodoList);
    };

    const todos = todoList
        .filter((todo) => {
            if (!todo.name.includes(searchText)) {
                return false;
            }
            if (selectedCategoryId && todo.category !== selectedCategoryId) {
                return false;
            }
            switch (selectedFilterItemId) {
                case "All":
                    return true;
                case "Important":
                    return todo.isImportant;
                case "Completed":
                    return todo.isComplete;
                case "Deleted":
                    return todo.isDeleted;
                default:
                    return true;
            }
        })
        .map((todo) => {
            return (
                <TodoItem
                    id={todo.id}
                    name={todo.name}
                    key={todo.id}
                    isImportant={todo.isImportant}
                    isComplete={todo.isComplete}
                    isDeleted={todo.isDeleted}
                    handleCompleteCheckboxChange={handleCompleteCheckboxChange}
                    handleTodoItemClick={handleTodoItemClick}
                    category={todo.category}
                />
            );
        });
    const activeTodoItem = todoList.find((todo) => {
        return todo.id === activeTodoItemId;
    });
    return (
        <div className="container">
            <div className="filter-panel">
                <FilterPanel
                    selectedFilterItemId={selectedFilterItemId}
                    setSelectedFilterItemId={setSelectedFilterItemId}
                    todoList={todoList}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                <CategoryList todoList={todoList} />
            </div>
            <div className="main-content">
                <input
                    type="text"
                    name="add-new-task"
                    placeholder="Add new task"
                    className="task-input"
                    ref={inputRef}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            const value = e.target.value;
                            setTodoList([
                                ...todoList,
                                {
                                    id: crypto.randomUUID(),
                                    name: value,
                                    isImportant: false,
                                    isComplete: false,
                                    isDeleted: false,
                                    category: "Personal",
                                },
                            ]);
                            inputRef.current.value = "";
                        }
                    }}
                />
                <div>{todos}</div>
                {showsidebar && (
                    <Sidebar
                        todoItem={activeTodoItem}
                        key={activeTodoItemId}
                        handleTodoItemChange={handleTodoItemChange}
                        setShowSideBar={setShowSideBar}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
