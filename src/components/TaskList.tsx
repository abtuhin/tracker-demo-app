import { Task } from "@/domain/task";

interface TaskListProps {
  tasks: Task[];
  onEditItem: (task: Task) => void;
  onDeleteTask: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const TaskList = ({ 
  tasks, 
  onEditItem = () => {}, 
  onDeleteTask = () => {},
  onToggleStatus = () => {} 
} : TaskListProps) => {
  return (
    <div style={{ display: "flex", flexDirection: 'column' }}>
      {tasks.map((task: Task) => (
        <div key={task.id}>
          <li>{task.name}</li>
          <button onClick={(_) => onToggleStatus(task.id)}>{task.status ? "Done" : "Not Done"}</button>
          <button onClick={(_) => onEditItem(task)}>Edit</button>
          <button onClick={(_) => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;