import React from "react";
import { TaskContent } from "./TaskContent";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder =(taskList, startIndex ,endIndex)=>{
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
}

export const Task = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    //task並び替える

    reorder(taskList,result.source.index,result.destination.index)
    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task,index) => (
                <div key={task.id}>
                  <TaskContent
                    index ={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
