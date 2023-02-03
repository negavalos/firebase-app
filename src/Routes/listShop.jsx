import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { addNewTask, getTasks, taskDelete, updateTask } from '../firebase/taskController';



const ListShop = () => {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [task, setTask] = useState({title:"", description: ""});
    const [tasks, setTasks] = useState([]);
    const [mode, setMode] = useState('add');
    const { user } = useContext(AppContext);

    const createNewTask = async () => {
      await addNewTask(task).catch(e => console.log("error:", e))
      setTask({ title: "", description: "" });
      initializeTasks()
    }
    const initializeTasks = () => {
      getTasks()
        .then(t => setTasks([...t]))
        .catch((e)=>console.error(e));
    }
    const editTask = (id) => {
      setMode('update');
      const taskToEdit = tasks.find(t => t.id === id);
      setTask({...taskToEdit})
    }
    const updateExistingTask = async () => {
      await updateTask(task)
      setTask({ title: "", description: "" });
      initializeTasks();
      setMode("add")
    }
    const removeTask =  async (id) => {
      await taskDelete(id);
      initializeTasks();
    }
    useEffect(() => {
      initializeTasks()
    }, []);
  return (
    <div>
      <h1 className="text-purple-600 font-semibold text-lg">Estas en la lista de compras</h1>
      <div className="flex flex-col gap-4">
        <h1>Introduce una nueva tarea</h1>
        <input disabled={!user} type="text" placeholder="Titulo" className="border shadow outline-none focus:ring ring-purple-600 rounded px-2 py-1 w-full" value={task.title} onChange={(e) => setTask({...task, title: e.target.value})} />
        <textarea disabled={!user} rows={4} type="text" placeholder="Descripcion" className="border shadow outline-none focus:ring ring-purple-600 rounded px-2 py-1 w-full" value={task.description} onChange={(e) => setTask({...task, description: e.target.value})} />
        <button disabled={!user} className="bg-purple-500 text-white rounded shadow py-1 hover:bg-purple-600 transition font-semibold disabled:bg-purple-400" onClick={mode === "add" ? createNewTask : updateExistingTask}>{mode ==="add" ? "Añadir" : "Actualizar"}</button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {tasks.map((task) =>(
          <div key={task.id} className="rounded-lg border border-purple-600 p-4 flex flex-col ga
          ">
            <h1  className='font-semibold'>{task.title}</h1>
            <div className="border-t border-purple-600"></div>
            <p>{task.description}</p>
            <div className="flex justify-between">
              <button onClick={() => editTask(task.id)} className="bg-purple-600 text-white py-1 px-2 rounded">Editar</button>
              <button onClick={() => window.confirm("Seguro que quiere eliminar esta tarea?")&& removeTask(task.id)} className="bg-red-600 text-white py-1 px-2 rounded">Eliminar</button>
            </div>
          </div>
        ))}
        </div>
      </div>
      {!user && <p className="text-red-600">Necesitas estar Logeado para añadir o leer las tareas</p>}
    </div>
  )
}

export default ListShop
