const Stats = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.status === "done").length;

  const progress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);
  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total Tasks</h3>
        <p id="total-count">{tasks.length}</p>
      </div>

      <div className="stat-card">
        <h3>To Do</h3>
        <p id="todo-count">
          {tasks.filter((task) => task.status === "todo").length}
        </p>
      </div>

      <div className="stat-card">
        <h3>In Progress</h3>
        <p id="progress-count">
          {tasks.filter((task) => task.status === "progress").length}
        </p>
      </div>

      <div className="stat-card">
        <h3>Done</h3>
        <p id="done-count">
          {tasks.filter((task) => task.status === "done").length}
        </p>
      </div>
      <div className="progress-card">
        <div className="progress-top">
          <h3>Productivity</h3>
          <span>{progress}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
