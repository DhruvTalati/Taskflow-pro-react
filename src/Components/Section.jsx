import TaskCard from "./TaskCard";

const Section = ({
  tasks,
  moveTask,
  sortBy,
  deleteTask,
  editTask,
  editingTask,
  searchTerm,
  priorityFilter,
}) => {
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "newest") {
      return b.id - a.id;
    }
    if (sortBy === "oldest") {
      return a.id - b.id;
    }
    if (sortBy === "high") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };

      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }

    if (sortBy === "low") {
      const priorityOrder = {
        Low: 1,
        Medium: 2,
        High: 3,
      };

      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }

    if (sortBy === "date") {
      return new Date(a.date) - new Date(b.date);
    }

    return 0;
  });

  return (
    <section className="board">
      {/* TODO COLUMN */}

      <div
        id="todo"
        className="task-column"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          const draggedTaskId = localStorage.getItem("dragTaskId");

          moveTask(Number(draggedTaskId), "todo");
        }}
      >
        <div className="heading">
          <div className="left">To-Do</div>

          <div className="right">
            {sortedTasks.filter((task) => task.status === "todo").length}
          </div>
        </div>

        {sortedTasks
          .filter((task) => task.status === "todo")

          .filter(
            (task) =>
              task.title
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase()) ||
              task.desc
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase()),
          )
          .filter(
            (task) =>
              (priorityFilter || "all") === "all" ||
              task.priority.toLowerCase() === priorityFilter,
          )

          .map((task) => (
            <TaskCard
              editTask={editTask}
              editingTask={editingTask}
              deleteTask={deleteTask}
              key={task.id}
              task={task}
            />
          ))}
      </div>

      {/* PROGRESS COLUMN */}

      <div
        id="progress"
        className="task-column"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          const draggedTaskId = localStorage.getItem("dragTaskId");

          moveTask(Number(draggedTaskId), "progress");
        }}
      >
        <div className="heading">
          <div className="left">In Progress</div>

          <div className="right">
            {sortedTasks.filter((task) => task.status === "progress").length}
          </div>
        </div>

        {sortedTasks
          .filter((task) => task.status === "progress")

          .filter(
            (task) =>
              task.title
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase()) ||
              task.desc
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase()),
          )

          .filter(
            (task) =>
              (priorityFilter || "all") === "all" ||
              task.priority.toLowerCase() === priorityFilter,
          )

          .map((task) => (
            <TaskCard
              editTask={editTask}
              editingTask={editingTask}
              deleteTask={deleteTask}
              key={task.id}
              task={task}
            />
          ))}
      </div>

      {/* DONE COLUMN */}

      <div
        id="done"
        className="task-column"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          const draggedTaskId = localStorage.getItem("dragTaskId");

          moveTask(Number(draggedTaskId), "done");
        }}
      >
        <div className="heading">
          <div className="left">Done</div>

          <div className="right">
            {sortedTasks.filter((task) => task.status === "done").length}
          </div>
        </div>

        {sortedTasks
          .filter((task) => task.status === "done")

          .filter(
            (task) =>
              task.title
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase()) ||
              task.desc
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase()),
          )

          .filter(
            (task) =>
              (priorityFilter || "all") === "all" ||
              task.priority.toLowerCase() === priorityFilter,
          )

          .map((task) => (
            <TaskCard
              editTask={editTask}
              editingTask={editingTask}
              deleteTask={deleteTask}
              key={task.id}
              task={task}
            />
          ))}
      </div>
    </section>
  );
};

export default Section;
