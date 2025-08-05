const TodoItem = (props) => {
    return (
        <div
            className="todo-item"
            onClick={() => {
                props.handleTodoItemClick(props.id);
            }}
        >
            <div style={{ display: "flex", gap: 4 }}>
                <input
                    type="checkbox"
                    checked={props.isComplete}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    onChange={() => {
                        props.handleCompleteCheckboxChange(props.id);
                    }}
                />
                {props.name}
            </div>
            {props.isImportant && <p>SAO</p>}
        </div>
    );
};

export default TodoItem;
