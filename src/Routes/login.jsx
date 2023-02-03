import React, {useState, useContext} from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { AppContext } from '../App';


const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AppContext);
    const hazLoginGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log("token: ", token );
            console.log("user: ", user);
            setUser(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    const hazLoginEmail = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        setUser(user)
        toast("Incio de session....")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  return (
    <div>
      <h1 className="text-xl font-semibold text-purple-500 mb-8">
          Este es el login
      </h1>
      <div className="flex flex-col items-center">
        <form onSubmit={hazLoginEmail} className="flex flex-col gap-2 max-w-xs">
          <input className="border border-purple-500 rounded py-1 px-2 outline-none" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="border border-purple-500 rounded py-1 px-2 outline-none" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="bg-purple-600 py-1 text-white rounded shadow">Login con email</button>
        </form>
        <button className="" onClick={hazLoginGoogle}>Login con Google</button>
      </div>
      
    </div>
  )
}

export default Login
