import React, { useState, useEffect } from "react";

const Tasks = ({ taskList }) => {
  const [todoList, changeTodoList] = useState(taskList);
  
  useEffect(() => {
    changeTodoList(taskList);
  }, [taskList]);
 const editTodo = (item) =>{
    const value = item.target.value;
    const todo = taskList.find((x) => x.id === parseInt(item.target.id));
    todo.value = value;
    changeTodoList([...taskList]);
 }
  const editTodoClick = (item) => {
    const id = item.target.id.substring(2);
    const todo = taskList.find((x) => x.id === parseInt(id));
    if (item.target.innerHTML === "Edit") {
      todo.readOnly = false;
      item.target.innerHTML = "Save";
      changeTodoList([...taskList]);
    } else {
      item.target.innerHTML = "Edit";
      todo.readOnly = true;
    }
  };
  const deleteTodo = (item) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const id = item.target.id.substring(2);
      const idx = taskList.findIndex((x) => x.id === parseInt(id));
      taskList.splice(idx, 1);
      changeTodoList([...taskList]);
    }
  };

  const markedTodo = (item) => {
    const id = item.target.id.substring(2);
    const todo = taskList.find((x) => x.id === parseInt(id));
    todo.isCompleted = true;
    todo.readOnly = true;
    changeTodoList([...taskList]);
  };

  return (
    <div className="task-list">
      <div id="tasks">
        {todoList.map((todo, index) => {
          return (
            <div className="task" key={index}>
              <div className="content">
                {
                  todo.readOnly &&
                  <p className={`${todo.isCompleted ? "strike" : ""}`}>{todo.value}</p>
                }
                {
                  !todo.readOnly &&
                  <input id={todo.id} value={todo.value} type="text" onChange={editTodo} />
                }
                
              </div>
              <div className="actions">
                <button className="Edit" id={"e-" + todo.id} onClick={editTodoClick}>
                  Edit
                </button>
                <button
                  className="Delete"
                  id={"d-" + todo.id}
                  onClick={deleteTodo}
                >
                  Delete
                </button>
                <button onClick={markedTodo} id={"m-" + todo.id} className="Marked">
                  Marked 
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
