import React ,{useState} from 'react'

function ToDolist() {
    const [tasks,setTasks]=useState(["name","run"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim() !==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
    }
    function removeTaks(index){
        const updateTasks=tasks.filter((_,i)=>i !==index)
        setTasks(updateTasks)
    }
    function moveTaskUp(index){
        if(index>0){
            const updateTasks=[...tasks]
            [updateTasks[index],updateTasks[index-1]]=[updateTasks[index-1],updateTasks[index]]
            setTasks(updateTasks)
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updateTasks=[...tasks]
            [updateTasks[index],updateTasks[index+1]]=[updateTasks[index+1],updateTasks[index]]
            setTasks(updateTasks)
        }

    }
  return (
   <div className='toDolist'>
    <h1>To-Do-List</h1>
    <div>
        <input className='inputT' type="text" maxLength="18" placeholder="Enter a task...." value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>
            Add Task
        </button>
    </div>
    <ol>
        {tasks.map((task,index)=>(
            <li key={index}>
                <span className="text">{task}</span>
                <button className='deleteB' onClick={()=>removeTaks(index)}>🚮</button>
                <button className='move-button' onClick={()=>moveTaskUp(index)}>☝️</button>
                <button className='move-button' onClick={()=>moveTaskDown(index)}>👇</button>
            </li>
        ))}
    </ol>

   </div>
  );
}

export default ToDolist