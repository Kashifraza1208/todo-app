import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { delteTask } from "./redux/todoAction";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  const handleDelete = (id) => {
    dispatch(delteTask(id));
  };

  return (
    <div className="gap-3">
      <h2 className="text-center mt-10 font-bold text-xl">Your task</h2>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li className="flex justify-center items-center m-10" key={task.id}>
              <h2>{task.text}</h2>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 ml-36 font-bold rounded-lg text-white p-1"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
