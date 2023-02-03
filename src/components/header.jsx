import React, { useContext } from 'react';
import { AppContext } from '../App';
import { IoLogoFirebase } from 'react-icons/io5';
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-hot-toast';

const auth = getAuth();

const Header = () => {
    const { setRoute, user, setUser } = useContext(AppContext);
    const hazLogout = () => {
        signOut(auth).then(() => {
            setRoute("login");
            setUser(null);
            toast("Logout")
          }).catch((error) => {
            console.log(error);
          });
    }
  return (
    <header className="h-20 w-full bg-gray-200 shadow-lg flex items-center justify-between px-8 fixed top-0">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setRoute("home")}>
        <IoLogoFirebase className="text-2xl text-purple-500" />
        <span className="text-xl font-semibold text-purple-500">Firebase-App</span>
        </div>
        <div className="flex gap-3">
         {!user ? <><button className="bg-purple-500 text-white py-1 px-3 rounded-full hover:bg-purple-600 transition" onClick={() => setRoute("login")}>Login</button>
         <button onClick={() => setRoute("register")}>Registrarse</button> </> :
         <button onClick={hazLogout}>Logout</button>
         }
        </div> 
    </header>
  )
}

export default Header
