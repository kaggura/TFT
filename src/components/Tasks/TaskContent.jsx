import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const TaskContent = ({ task, taskList, setTaskList ,index}) => {
  const handleDelete = (id, task) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
