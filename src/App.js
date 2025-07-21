import "./App.css";
import CreateTask from "./Components/CreateTask";
import Header from "./Components/Header";

function App() {
  const addTask =(newTask)=>{
console.log(newTask);
  }
  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask}/>
    </div>
  );
}

export default App;
