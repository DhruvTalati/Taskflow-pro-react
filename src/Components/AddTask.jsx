import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const AddTask = ({
  isModalOpen,
  addTask,
  closeModal,
  editingTask,
  updateTask,
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDesc(editingTask.desc);
      setPriority(editingTask.priority);
      setDate(editingTask.date);
    }
  }, [editingTask]);

  return (
    <div className={`modal ${isModalOpen ? "active" : ""} add-new-task`}>
      <div onClick={closeModal} className="bg"></div>
      <motion.div
        className="center"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="task-title-input"
          type="text"
          placeholder="Task Title"
        ></input>

        <textarea
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          id="task-desc-input"
          placeholder="Task Description"
        ></textarea>

        <label for="task-priority">Priority:</label>
        <select
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          id="task-priority"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type="date"
          id="task-date"
        ></input>

        <button
          onClick={() => {
            if (editingTask) {
              updateTask({
                ...editingTask,
                title,
                desc,
                priority,
                date,
              });
            } else {
              addTask({
                title,
                desc,
                priority,
                date,
              });
            }
            setTitle("");
            setDesc("");
            setPriority("");
            setDate("");

            closeModal();
          }}
          id="add-new-task"
          className="add-task-btn"
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </motion.div>
    </div>
  );
};

export default AddTask;
