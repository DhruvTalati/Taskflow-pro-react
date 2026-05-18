const Navbar = ({
  theme,
  sortBy,
  setSortBy,
  setTheme,
  openModal,
  searchTerm,
  setSearchTerm,
  setPriorityFilter,
  priorityFilter,
}) => {
  return (
    <div>
      <nav>
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">TaskFlow Pro</span>
        </div>

        <input
          type="text"
          id="search-task"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="high">High Priority</option>
          <option value="low">Low Priority</option>
          <option value="date">Due Date</option>
        </select>

        <select
          id="priority-filter"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <div className="right flex">
          <button
            id="theme-toggle"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button onClick={openModal} id="toggle-modal">
            Add New Task
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
