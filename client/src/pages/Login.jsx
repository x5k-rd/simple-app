import { useState } from "react"

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const login = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      {/* onsumbit is added to the form to be usable after is defined as button and also requires a function to work */}
      <form onSubmit={login} >
      <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit' >Login</button>
      </form>
    </div>
  )
}
