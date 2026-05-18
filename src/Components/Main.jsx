import Section from "./Section";
import Stats from "./Stats";

const Main = ({
  tasks,
  deleteTask,
  editTask,
  editingTask,
  searchTerm,
  priorityFilter,
  moveTask,
  sortBy,
  setSortBy,
}) => {
  return (
    <div>
      <Stats tasks={tasks} />
      <Section
        sortBy={sortBy}
        setSortBy={setSortBy}
        moveTask={moveTask}
        priorityFilter={priorityFilter}
        searchTerm={searchTerm}
        editTask={editTask}
        editingTask={editingTask}
        deleteTask={deleteTask}
        tasks={tasks}
      />
    </div>
  );
};

export default Main;
