import React, { useContext } from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { BsCartFill, BsShop } from 'react-icons/bs';
import { AppContext } from '../App';


const Footer = () => {
    const {setRoute} = useContext(AppContext);
  return (
    <footer className="fixed h-16 w-full bg-purple-600 bottom-0 flex justify-evenly items-center">
        <div className="bg-purple-300 p-2 text-4xl rounded-full text-rose-600 cursor-pointer hover:text-rose-500 transition" onClick={() => setRoute("home")}>
            <AiTwotoneHome />
        </div>  
        <div className="bg-purple-300 p-2 text-4xl rounded-full text-rose-600 cursor-pointe hover:text-rose-500 transition" onClick={() => setRoute("shopping")}>
            <BsCartFill />
        </div>
        <div className="bg-purple-300 p-2 text-4xl rounded-full text-rose-600 cursor-pointe hover:text-rose-500 transition" onClick={() => setRoute("ListShop")}>
            <BsShop />
        </div>    
    </footer>
  )
}

export default Footer
