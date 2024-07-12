import "./taskItem.css";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ title, desc, editTaskName }) => {
  return editTaskName ? (
    <>
      <input type="text" />
    </>
  ) : (
    <div className="task-item margin-y-children">
      <div className="task-item__info margin-y-children">
        <h3 className="task-item__name">{title}</h3>
        <p className="task-item__description">{desc}</p>
      </div>

      <div className="task-item__buttons">
        <button className="task-item__button">
          <MdDelete className="delete" size={20} /> Delete
        </button>

        <button className="task-item__button">
          <LiaEdit className="edit" size={20} /> Edit
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
