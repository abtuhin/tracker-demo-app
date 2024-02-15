import { Task } from "@/domain/task";
import { useEffect, useState } from "react";

interface TaskEditFormProps {
  task: Task;
  onEditTask: (task: Task) => void;
}

const TaskEditForm = ({ task, onEditTask = () => {} }: TaskEditFormProps) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(task.name);
  }, [task]);
  
  return (
    <div>
      <h4>Edit task {task.name}</h4>
      <input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button
        style={{ margin: '5px 10px' }} 
        onClick={(e) => {
          e.preventDefault();
          onEditTask({...task, name: name});
        }}>
          Edit task
      </button>
    </div>
  );
}

export default TaskEditForm;