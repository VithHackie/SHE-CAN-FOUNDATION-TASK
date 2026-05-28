import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "./firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [visiblity, setVisibility] = useState(" hidden")
    const [color, setColor] = useState("");
    const [animation, setAnimation] = useState("");

    const submitHandler = async (e)=>{
        e.preventDefault();
        try{
            setAnimation(" animate-pulse")
            await signInWithEmailAndPassword(auth, email, password);
            setEmail("");
            setPassword("")
            setMsg("Logged In");
            setColor("bg-emerald-400");
            setVisibility(" ");
        }catch(e){
            setMsg(e.message);
            setColor("bg-red-400")
            setVisibility(" ");
        }finally{
            setAnimation("")
        }
    }


  return (
    <div className="flex items-center flex-col justify-center h-screen w-full px-5 sm:px-0">
        <p className={"px-3 py-1 rounded text-lg Sfont border bg-emerald-400 mb-3 "+color+visiblity}>{msg}</p>
        <title>Admin Log In</title>
      <div className="flex bg-gray-300 rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-2xl text-gray-600 text-center Sfont">Welcome Admin!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 Sfont">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-500 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2 Sfont">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-500 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
            />
          </div>
          <div className="mt-3">
            <p className="text-sm Sfont font-medium">Admin Credentials {"[for task purpose]"}: <br />Email - admin@gmail.com <br />Password - password123</p>
          </div>
          <div className="mt-8">
            <button onClick={(e)=>{submitHandler(e)}} className={"bg-blue-700 text-white Sfont font-bold py-2 px-4 w-full rounded hover:bg-blue-600 "+animation}>
              Login
            </button>
          </div>
          <a
            href="#"
            className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
