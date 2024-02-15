import TaskEditForm from "@/components/TaskEditForm";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { Task } from "@/domain/task";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    try {
      const tasks = localStorage.getItem("taskStore");
      if(tasks) setTasks(JSON.parse(tasks));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addToStore = (tasks: Task[]) => {
    try {
      localStorage.setItem("taskStore", JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmitTask = (name: string) => {
    const task: Task = {
      id: Date.now(),
      name: name,
      status: false
    }
    const newList = [...tasks, task];
    setTasks(newList);
    addToStore(newList);
  }

  const onEditItem = (task: Task) => {
    setTask({...task});
  }

  const onEditTask = (task: Task) => {
    const newList = [...tasks].map((item) => {
      if (item.id === task.id) {
        const updatedItem = {
          ...item,
          name: task.name,
        };
        return updatedItem;
      }

      return item;
    });
    setTasks(newList);
    addToStore(newList);
  }

  const onDeleteTask = (id: number) => {
    const newList = tasks.filter((task: Task) => task.id !== id);
    setTasks([...newList]);
    addToStore(newList);
  }

  const onToggleStatus = (id: number) => {
    const newList = [...tasks].map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          status: !item.status,
        };

        return updatedItem;
      }

      return item;
    });
    setTasks(newList);
  }

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column' }}>
      <h3>Task Tracker</h3>
      <br />
      <TaskList 
        tasks={tasks}
        onEditItem={onEditItem}
        onDeleteTask={onDeleteTask}
        onToggleStatus={onToggleStatus} 
      />
      <TaskForm onSubmitTask={onSubmitTask} />
      <br />
      {task && (<TaskEditForm task={task} onEditTask={onEditTask}/>)}
    </div>
  );
}
