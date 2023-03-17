import React, { useState } from "react";
import Tasks from "./Tasks";

const Header = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const text = e.target.elements.taskInput.value;
    if (!text) {
      return;
    }
    const arrTasks = [...taskList];
    
    arrTasks.push({ value: text, readOnly: true, isCompleted:false,id:arrTasks.length });

    setTaskList(arrTasks);
  };
  return (
    <header>
      <h1>Create your Todo-List</h1>
      <form onSubmit={addTask} id="task-form">
        <input type="text" id="taskInput" placeholder="What are your tasks?" />
        <button type="submit" className="task-submit">
          Add
        </button>
      </form>
      <Tasks taskList={taskList} />
    </header>
  );
};

export default Header;
