import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/todoAction";

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleTask = () => {
    const tasks = inputRef.current.value.trim();
    if (tasks !== "") {
      dispatch(addTask(tasks));
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-10 ">ToDo App</h1>
      <div className="flex justify-center items-center mt-36 ">
        <input
          className="border rounded-sm p-1 w-[20vw] "
          type="text"
          name=""
          placeholder="Enter task here..."
          ref={inputRef}
        />
        <button
          onClick={handleTask}
          className="bg-red-500 text-white rounded-sm font-bold p-1 hover:text-black hover:bg-gray-300 "
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Task;
