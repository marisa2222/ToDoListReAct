import React from "react";

const Tasks = ({ taskList }) => {
 
  return (
    <div className="task-list">
      <div id="tasks">
        {taskList.map((text) => {
          return (
          
            <div className="task">
              <div className="content">
                <input className="text" value={text} readonly />
              </div>
              <div className="actions">
              <button className="Edit">Edit</button>
              <button className="Delete">Delete</button>
              <button className="Marked">Marked</button>

              </div>

              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
