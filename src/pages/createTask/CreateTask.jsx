import { useRef } from "react";
import "./createTask.css";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/slices/taskSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const createTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = useRef();
  const desc = useRef();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title.current.value.trim() || !desc.current.value.trim()) {
      toast.error("Please fill all the fields");
      return;
    }

    dispatch(
      taskActions.addTask({
        title: title.current.value,
        desc: desc.current.value,
      })
    );
    console.log(
      taskActions.addTask({
        title: title.current.value,
        desc: desc.current.value,
      })
    );

    navigate("/");
  };

  return (
    <div className="create-task margin-y-children">
      <h1 className="create-task__title">Let's make a new one !</h1>

      <div className="create-task__form">
        <form className="margin-y-children" action="">
          <div className=" label-input--block">
            <label htmlFor="title">Title</label>
            <input
              ref={title}
              className="create-task__form-input"
              type="text"
              name="task-input"
              id="title"
            />
          </div>

          <div className=" label-input--block">
            <label htmlFor="desc">Description</label>
            <textarea
              ref={desc}
              className="create-task__form-input"
              type="text"
              name="task-input"
              rows="6"
              id="desc"
            ></textarea>
          </div>

          <button onClick={(e) => handleAddTask(e)} className="button--primary">
            Create now
          </button>
        </form>
      </div>
    </div>
  );
};

export default createTask;
