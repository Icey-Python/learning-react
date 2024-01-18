import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react";

//css
import "./index.css"

function App() {
  const [tasks,setTasks] = useState(
    [
      {
        "id": 1,
        "date": "2023-01-17", 
        "text": "Meeting with team",
        "reminder": true
      },
      {
        "id": 2, 
        "date": "2023-02-15",
        "text": "Mom's birthday",
        "reminder": true
      },
      {
        "id": 3,
        "date": "2023-03-05",
        "text": "Dentist appointment",
        "reminder": false
      },
      {
        "id": 4,
        "date": "2023-04-12",
        "text": "Sarah's wedding",
        "reminder": true
      },
      {
        "id": 5,
        "date": "2023-05-24",
        "text": "John's graduation party",
        "reminder": false
      },
      {
        "id": 6,
        "date": "2023-06-10",
        "text": "Camping trip",
        "reminder": false
      },
      {
        "id": 7, 
        "date": "2023-07-04",
        "text": "Independence Day picnic",
        "reminder": true
      },
      {
        "id": 8,
        "date": "2023-08-19",
        "text": "Jane's birthday",
        "reminder": true
      },
      {
        "id": 9,
        "date": "2023-09-01",
        "text": "Concert tickets go on sale",
        "reminder": true
      },
      {
        "id": 10,
        "date": "2023-10-31",
        "text": "Halloween party",
        "reminder": false
      }
    ]
  )

//delete tasks from all tasks 
const onDelete=(id)=>{
  setTasks(tasks.filter((task)=>task.id !==  id 
  ))
}

//toggle reminder 
const onSwitchReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder}:task))
}
  return (
    <div className="container">
      <Header title={"Task Tracker"}/>
      <Tasks tasks={tasks} onDelete={onDelete} onSwitchReminder={onSwitchReminder}/>
    </div>
); 
}

export default App;
