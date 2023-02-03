import React, { useState, createContext } from 'react';
import { app, messaging } from './firebase';
import Header from './components/header';
import Home from './Routes/home';
import Login from './Routes/login';
import Register from './Routes/register';
import { Toaster, toast } from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';
import Shopping from './Routes/shopping';
import Footer from './components/footer';
import ListShop from './Routes/listShop';


export const AppContext = createContext(null);

onMessage(messaging, payload => {
  console.log("Nueva notificacion en directo ", payload);
  toast.custom(t => (
      <div className='bg-purple-600 p-4 rounded-lg'>
        <h1 className='text-lg text-yellow-50 font-semibold'>{payload.notification.title}</h1>
        <p className='text-sm text-yellow-50'>
          {payload.notification.body}
        </p>
      </div>
  )
  );
})

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <Toaster />
      <div className="h-screen">
        <Header />
        <main className="p-6 pt-24 pb-20">
          {route === "home" && <Home />}
          {route === "login" && <Login />}
          {route === "register" && <Register />}
          {route === "shopping" && <Shopping />}
          {route === "ListShop" && <ListShop />}
          
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
