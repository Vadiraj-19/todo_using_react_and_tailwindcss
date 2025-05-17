import { useState ,useEffect} from "react";



const ToDoItem = ({ todoit, handleDel, id, handleEdit, isEditing, editId }) => {
  const [isClicked, setIsclicked] = useState(false);

  useEffect(() => {
    if (isEditing && id === editId) {
        setIsclicked(false); // Reset the state to false when editing
    }
}, [isEditing, editId, id]);

  return (
    <div className="flex justify-center items-center w-screen  ">
      <div className=" text-white md:w-[50%] mt-4 w-[80%]">
        <div className="bg-black  w-[90%] p-4 rounded-lg shadow-md shadow-gray-400 flex justify-between items-center">
          <h2>{todoit}</h2>
          <div className="flex  w-[15%] justify-between items-center">
            <button onClick={() => { handleDel(id) }}><i className="fa-solid fa-trash"></i></button>
            <button onClick={() => { handleEdit(id) }}><i className="fa-solid fa-pen"></i></button>
          </div>

        </div>
      </div>

      <div className="w-10 h-10">
        <button
          onClick={() => setIsclicked(true)}
          className={`${isClicked
            ? 'text-green-700 bg-white text-lg animate-ping'
            : 'text-white bg-black'
            } font-bold w-full h-full rounded-full flex justify-center items-center`}
          disabled={isEditing && id === editId} // Disable for the task being edited
        >
          <i className="fa-solid fa-check"></i>
        </button>

      </div>

    </div>


  )
}

export default ToDoItem