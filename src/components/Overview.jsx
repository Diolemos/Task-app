import React from "react";
import {FaTimes} from 'react-icons/fa'
const Overview = (props) => {
  const { tasks, handleDelete } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}
        <button onClick={()=>{handleDelete(task.id)} } className='close'>
          <FaTimes color='purple'></FaTimes>
        </button>
        <button >Edit</button>
        </li>;
      })}
    </ul>
  );
};

export default Overview;
