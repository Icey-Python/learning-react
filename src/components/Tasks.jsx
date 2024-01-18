import Item from "./Item"

const Tasks = ({tasks,onDelete,onSwitchReminder}) => {
  return (
    <>
    {tasks.map((task)=>( 
      <Item key={task.id} task={task} onDelete={onDelete} onSwitchReminder ={onSwitchReminder} />
    ))}
    </>
  )
}

export default Tasks
