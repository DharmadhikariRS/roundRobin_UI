import React from 'react'
import { useState } from 'react'
import axios from "axios"
import './Task.css'
const Task = () => {
    const [task,setTask]=useState('')
    const[teamName,setTeamName]=useState('')
    const[obj,setObj]=useState({
        teamName:"",
        task:"",
    })
    const handleMessageChange = event => {
        // 👇️ access textarea value
        setObj({...obj, [event.target.name]:event.target.value});
        console.log(obj);
      };
      const handleChange = (e) => {
        setObj({...obj, teamName:e.target.value});
      
      };
      const assignTask=()=>{
        // setObj({
        //     teamName:teamName,
        //     task:task
        // })

        console.log("obj",obj);
        const Response = axios.post(
            "http://localhost:3000/api/v1/memberTask/tasks",
            obj
          );
          
      }
  return (
    <>
    <div className='outerDiv'>
    <div className='heading'>Assign tasks : </div>
    <textarea  id="task"
       className='text'
  
        name="task"
        value={obj.task}
        onChange={handleMessageChange}
     
         ></textarea>
    <select name ="teamName" value={obj.teamName} onChange={handleMessageChange}
    className='select'>
    <option value=""hidden >Select team</option>
        <option value="team1">team1</option>
        <option value="team2">team2</option>
        <option value="team3">team3</option>
    </select>
    <button className='btn' onClick={assignTask}>Assign</button>
    </div>
    </>

  )
}

export default Task