import { motion } from "framer-motion";

const TaskCard = ({ task, deleteTask, editTask }) => {
  return (
    <motion.div
      draggable="true"
      className="task"
      onDragStart={() => {
        localStorage.setItem("dragTaskId", task.id);
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -3,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      <h2>{task.title}</h2>
      <p>{task.desc}</p>
      <span className={`priority ${task.priority.toLowerCase()}`}>
        {task.priority}
      </span>
      <small className="due-date">📅 Due: {task.date}</small>

      <div className="task-actions">
        <button
          onClick={() => {
            editTask(task);
          }}
          className="edit-btn"
        >
          Edit
        </button>

        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TaskCard;
