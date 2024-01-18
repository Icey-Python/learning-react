import {FaTimes} from 'react-icons/fa'
const Item = ({task,onDelete,onSwitchReminder}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onSwitchReminder(task.id)}>
      <h3> 
        {task.text}
        <FaTimes style={{color:'red'}} onClick={()=>onDelete(task.id)}/>
      </h3>
      <p>{task.date}</p>
    </div>
  )
}

export default Item
