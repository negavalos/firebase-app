//En este fichero crearemos toda la logica de base de datos para las tasks
import { db } from "./index";
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore"; 


// CRUD -Create, read, Update, Delete.

export const addNewTask = async task =>{
    console.log(task);
    await addDoc(collection(db, 'tasks'),task)
}

export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    // console.log(querySnapshot);

    // querySnapshot.forEach(doc => {
    //     console.log(doc.id, ' => ', doc.data());
    // })
    const tasks = querySnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    })
    // console.log(tasks);
    return tasks;
}
export const updateTask = async (task) => {
    // console.log(task);
    await setDoc(doc(db, 'tasks', task.id),{
        title: task.title,
        description: task.description
    })
}
export const taskDelete = async (id) => {
    await deleteDoc(doc(db, 'tasks', id ))
}