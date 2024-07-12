import { useState } from "react";
import "./tasks.css";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import TaskItem from "../../components/taskItem/TaskItem/TaskItem";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((store) => store.task);

  const editTaskName = (id, name) => {};

  return (
    <div className="tasks margin-y-children">
      <h1 className="tasks__title">Your Tasks</h1>

      {tasks.length ? (
        <div className="tasks__list">
          {tasks.map((task, index) => (
            <TaskItem {...task} />
          ))}
        </div>
      ) : (
        <div className="tasks__empty margin-y-children">
          <p>No tasks yet ?</p>

          <Link to="/create-task" className="button--primary">
            Create one <IoMdAdd />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Tasks;
