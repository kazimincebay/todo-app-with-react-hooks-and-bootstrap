import { useState } from "react";
import "./App.css";
import CreateTask from "./Components/CreateTask";
import Header from "./Components/Header";
import Task from "./Components/Task";
import Footer from "./Components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    console.log(newTask);
    setTasks((prevTask) => {
      return [ ...prevTask, newTask ];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="container">
      <div className="row my-5">
        {tasks.map((taskItem, index) => {
          return (
            <Task
              key={index}
              id={index}
              title={taskItem.title}
              content={taskItem.content}
              delete={deleteTask}
            />
          );
        })}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
