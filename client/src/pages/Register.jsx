// create state for register
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function Register() {
const navigate = useNavigate()
const [data, setData] = useState({
  name: '',
  email: '',
  password: '',
})

  // create an arrow function for the onSubmit register & button
  // e = event
  const registerUser = async (e) => {
    e.preventDefault()
    // destructure the data
    const {name, email, password} = data
    // axios is used to make a POST call to create the user in DB
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })
      // check if there is any error with data as defined in server/controller (data.error/check email)
      if(data.error) {
        toast.error(data.error)
      } else {
        // reset input fields and send success message
        setData({})
          toast.success('Login successful. Welcome!')
          navigate('/login')
      }
    } catch (error) {
      console.log(Error)
    }
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='Text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
