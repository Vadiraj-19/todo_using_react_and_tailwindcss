
import { useState } from "react"
import Header from "./Components/Header"
import ToDoList from "./Components/ToDoList"
import Footer from "./Components/Footer"


const App = () => {
    const [inp,setInp]= useState("")
    const [task,setTask]= useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    
    const handleInput = (e) => {
        
        setInp(e.target.value)
    }
    const handleDelete = (id) => {
        setTask(prevTasks => prevTasks.filter(task => task.id !== id));
      };
    const handleEdit = (id) => {
        const newTask = task.find(task => task.id === id);
        
        setInp(newTask.text);
        setIsEditing(true);
        setEditId(id);
        


        
      };
     
    const handleClick = () => {
        if(inp !== ""){
            if(isEditing){
                setTask(prev => prev.map(task=> task.id === editId ? {...task, text: inp} : task));
                setIsEditing(false);
                setEditId(null);
                setInp("");
            }
            else{
                const newTask = {
                    id: Date.now(), 
                    text: inp
                };
                setTask(prev => [...prev, newTask]);
                setInp("");
            }
           
            
        }
        
    }
    
    return (
        <>
  
            <Header />
            <div className="flex justify-center items-center mt-4">
            <input className="border-2 border-black rounded-lg p-1 shadow-lg shadow-gray-500" type="text" value={inp} onChange={handleInput} placeholder="Enter task..." />
            <button className="bg-black text-white font-bold p-1 px-4 ml-2 rounded-xl hover:bg-gray-100 hover:text-black hover:shadow-lg hover:shadow-slate-900 " onClick={handleClick}
          ><i className="fa-solid fa-check"></i></button>
            </div>
            
           
            <ToDoList
                task={task}
                toDel={handleDelete}
                toEdit={handleEdit}
                isEditing={isEditing}
                editId={editId} 
            />
            <Footer/>
            
        </>

    )
}

export default App