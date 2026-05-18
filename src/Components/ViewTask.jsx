const ViewTask = () => {
  return (
    <div className="task-view-modal">
      <div className="task-view-bg"></div>

      <div className="task-view-card">
        <h2 id="view-title"></h2>
        <p id="view-desc"></p>
        <span id="view-priority"></span>
        <small id="view-date"></small>

        <button id="close-view">Close</button>
      </div>
    </div>
  );
};

export default ViewTask;
