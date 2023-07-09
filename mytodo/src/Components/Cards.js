import React from 'react';
import './style.css';


const Cards = ({ind,title,deleteTask}) => {

    let i= ind;
    i++;

   

  return (
    <div className='cards-container'>

    <div className="cards">

   <h2>{`task ${i}: ${title}`}</h2>
   
   <button className=' btn' onClick={()=>{
    deleteTask(ind);
   }} >Delete</button>        

 
    </div>

    </div>
        
       
  )
}

export default Cards