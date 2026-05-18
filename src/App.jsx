import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import AddTask from "./Components/AddTask";
import { useState } from "react";
import { useEffect } from "react";
import ViewTask from "./Components/ViewTask";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Build UI",
            desc: "Design Dashboard",
            priority: "High",
            status: "todo",
          },
        ];
  });

  const addTask = (newTaskData) => {
    const fullTask = {
      id: Date.now(),
      ...newTaskData,
      status: "todo",
    };
    setTask((prevTask) => [...prevTask, fullTask]);
    toast.success("Task added successfully!");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const editTask = (task) => {
    setEditingTask(task);
    openModal();
  };

  const deleteTask = (id) => {
    setTask((prevTask) => prevTask.filter((task) => task.id !== id));
    toast.error("Task deleted!");
  };

  const updateTask = (updatedTask) => {
    setTask((prevTask) =>
      prevTask.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );

    setEditingTask(null);
    closeModal();
    toast.success("Task updated!");
  };

  const moveTask = (id, newStatus) => {
    setTask((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        openModal={openModal}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <Main
        sortBy={sortBy}
        setSortBy={setSortBy}
        moveTask={moveTask}
        priorityFilter={priorityFilter}
        searchTerm={searchTerm}
        editTask={editTask}
        editingTask={editingTask}
        deleteTask={deleteTask}
        tasks={task}
      />
      {isModalOpen === true && (
        <AddTask
          updateTask={updateTask}
          editingTask={editingTask}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          addTask={addTask}
        />
      )}
      <ViewTask />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: theme === "dark" ? "#111827" : "#ffffff",
            color: theme === "dark" ? "#f8fafc" : "#111827",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "14px 18px",
            borderRadius: "16px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            fontWeight: "600",
          },
        }}
      />
    </div>
  );
};

export default App;
