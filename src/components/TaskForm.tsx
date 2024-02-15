import { useState } from "react";

interface TaskFormProps {
  onSubmitTask: (name: string) => void;
}

const TaskForm = ({ onSubmitTask = () => {} }: TaskFormProps) => {
  const [name, setName] = useState('');
  return (
    <div style={{ marginTop: 15 }}>
      <input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button
        style={{ margin: '5px 10px' }} 
        onClick={(e) => {
          e.preventDefault();
          onSubmitTask(name);
          setName("");
        }}>
        Add task
      </button>
    </div>
  );
}

export default TaskForm;