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
        <div key={task.id} style={{ display: "flex", flexDirection: 'row' }}>
          <h4>{task.name}</h4>
          <button style={{ margin: '5px 10px' }} onClick={(_) => onToggleStatus(task.id)}>{task.status ? "Completed" : "Not completed"}</button>
          <button style={{ margin: '5px 10px' }} onClick={(_) => onEditItem(task)}>Edit</button>
          <button style={{ margin: '5px 10px' }} onClick={(_) => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;