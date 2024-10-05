import { Link } from "react-router-dom"
import{ useState } from 'react'
import axios from 'axios'
import Alert from "../componets/Alert"

const Register = () => {
   const [ name, setName ] = useState('')
   const [ email, setEmail ] = useState('')
   const [ password, setPassword ] = useState('')
   const [ passwordReapet, setPasswordReapet ] = useState('')
   const[alert, setAlert] = useState('')


   const handleSubmit = async e =>{
    e.preventDefault();
    if([name, email, password, passwordReapet].includes('')){

      setAlert({ msg: 'please enter a valid information', error:true})
      return;
    }

    if(password !== passwordReapet){
      setAlert({ msg: 'different passwords', error:true})
      return;
    }

    if(password.length < 6 ){
      setAlert({ msg: 'minimum 6 characters', error:true})
      return;
    }
    setAlert({})

     try {
      const url= "http://localhost:4000/api/vet"
       await axios.post(url, {name, email, password})
      setAlert({
        msg: 'registered user check your email',
       error: false })

     } catch (error) {
      setAlert({msg: error.response.data.msg,
      error: true})
     }






   }

    const { msg } = alert


    return (
      <>
        <div>
        <h1 className="text-indigo-600 font-black text-6xl"> Create a new account and manage your
          {" "} <span className="text-blue-800">Patients</span></h1>
        </div>
     <div className=" mt-20  md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      { msg && <Alert
        alert={alert}
      /> }
      <form onSubmit={handleSubmit}>
          <div className="mt-10">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Name
          </label>
          <input type="text"
          placeholder="Jhon Doe"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
          value={name}
          onChange={ e => setName(e.target.value)}
          / >
        </div>

        <div className="mt-5">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            E-mail
          </label>
          <input type="email "
          placeholder="Email@email.com"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
          value={email}
          onChange={ e => setEmail(e.target.value)}
          / >
        </div>
        <div className="mt-5">
          <label className="uppercase text-gray-600 block text-xl font-bold">
           password
          </label>
          <input type="password"
          placeholder="*********"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
          value={password}
          onChange={ e => setPassword(e.target.value)}
          / >
        </div>
        <div className="mt-5">
          <label className="uppercase text-gray-600 block text-xl font-bold">
           repeat password
          </label>
          <input type="password"
          placeholder="*********"
          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
          value={passwordReapet}
          onChange={ e => setPasswordReapet(e.target.value)}
          / >
        </div>
        <input 
         type="submit"
         value="Create Account"
         className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-500 md:w-auto"
         />
       </form>

       <nav className=" mt-10 lg:flex  lg:justify-between">
       <Link to="/"className="text-gray-500 hover:text-indigo-700 block text-center my-5">Already have an account? Sign in </Link>
       <Link to="/forgottenpassword"className="text-gray-500 hover:text-indigo-700 block text-center my-5">Lost your password?</Link>


      </nav>
        </div>
      </>
    )
  }
  
  export default Register