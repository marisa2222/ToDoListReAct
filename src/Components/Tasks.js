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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
