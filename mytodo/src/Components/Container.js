import React, { useEffect, useState } from 'react'
import './style.css'
import Cards from './Cards'

const Container = () => {

    const initialArr= localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[];

    const [task, setTask]= useState(initialArr);

    const  [title,setTitle] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(title);

        setTask([...task,title]);
        // console.log(task);
        setTitle("");
        
    }

    const deleteTask =(index)=>{
        const filterArray = task.filter((val,i)=>{
            return  i !== index;
        });
        setTask(filterArray)
    }

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(task));

    },[task])



  return (
    <div className='container'>
        <div className="input-container">
            <form onSubmit={handleSubmit}>
            <input className='input-field'  type="text" value={title} onChange={(e)=>{
               setTitle(e.target.value);
            }}/>
        <button className='add-btn btn'type='submit'>Add</button> 
            </form>
               


        {task.map((item,index)=>(
            
            <Cards  
            key={index} 
            ind={index}
             title={item}
             deleteTask={deleteTask}
            />
       ) )}
        

        </div>
       
    </div>
  )
}

export default Container