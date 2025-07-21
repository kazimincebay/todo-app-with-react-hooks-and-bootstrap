import React, { useState } from "react";

function CreateTask(props) {
  const [task,setTask] =useState({
    title:'',
    content:''
  });
 function detectChange(event){
const {name,value} = event.target;

setTask((prevTask) =>{
  return{...prevTask,[name]:value}
});
  }
function submitTask(event){
  props.onAdd(task);
  setTask({
    title:'',
    content:''
  })
event.preventDefault();

}
  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input type="text" name="title" className="form-control todoText mb-3" onChange={detectChange}  value={task.title} placeholder="Title" />
        <textarea rows={3}  className="form-control todoText mb-3" name="content" onChange={detectChange} value={task.content} placeholder="Enter your work"></textarea>
        <button className="btn btn-primary todoButton" onClick={submitTask}>Add</button>
      </form>
    </div>
  );
}
export default CreateTask;
