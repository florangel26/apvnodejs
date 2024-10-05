import React from 'react'
import { Link } from "react-router-dom"


const ForgottenPassword = () => {
  return (
    <>
      <div>
      <h1 className="text-indigo-600 font-black text-4xl"> Reset your password</h1>
        <h2 className="text-black font-black text-2xl mt-10"> Don’t worry, we’ve got your back! Just enter your email address and we’ll send you a link to reset
        {" "} <span className="text-blue-800"> your password.</span></h2>
        </div>
          
    
     <div className=" mt-20  md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      <form action="">
        <div className="mt-10">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            E-mail
          </label>
          <input type="email "
          placeholder="Email@email.com"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/ >
          </div>
          <input 
         type="submit"
         value="Send reset"
         className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-500 md:w-auto"
         />
        
         </form>
         <nav className=" mt-10 lg:flex  lg:justify-between">
       <Link to="/"className="text-gray-500 hover:text-indigo-700 block text-center my-5">Already have an account? Sign in </Link>
       <Link to="/register"className="text-gray-500 hover:text-indigo-700 block text-center my-5">Create a new account </Link> </nav>

       </div>  
    </>
  )
}

export default ForgottenPassword
