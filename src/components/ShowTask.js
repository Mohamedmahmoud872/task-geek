import "./ShowTask.css";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  
  const handleDeleteAll = () => {
    setTaskList([]);
  }
  const handleDeleteOne = (id) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }
  const handleEdit = (id) => {
    const selectedTask = taskList.find(t => t.id === id);
    setTask(selectedTask);
  }
  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">TASKS</span>
          <span className="count">{taskList.length}</span>
        </span>
        <button className="clearAll" onClick={handleDeleteAll}>Clear All</button>
      </p>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDeleteOne(task.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
