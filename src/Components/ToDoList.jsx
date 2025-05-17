import ToDoItem from "./ToDoItem"

const ToDoList = ({ task, toDel, toEdit, isEditing, editId }) => {
  return (
    <>
    
    {task.map((item) => (
                <ToDoItem
                    key={item.id}
                    id={item.id}
                    todoit={item.text}
                    handleDel={toDel}
                    handleEdit={toEdit}
                    isEditing={isEditing}
                    editId={editId} // Pass editId here
                />))}
    
    
    </>
    
  )
}

export default ToDoList