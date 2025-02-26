import { useState } from "react";
import axios from 'axios'
// grab toast for data checks to display errors on UI side
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
  // destructure data
  const {email, password} = data
  try {
    // grab the destructed data and pass the payload
    const {data} = await axios.post('/login', {
      email,
      password
    });
    if(data.error) {
      toast.error(data.error)
    } else {
      setData({});
      navigate('/dashboard')
    }
  } catch (error) {
    
  }
  }

  return (
    <div>
      {/* onsumbit is added to the form to be usable after is defined as button and also requires a function to work */}
      <form onSubmit={loginUser} >
      <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit' >Login</button>
      </form>
    </div>
  )
}
