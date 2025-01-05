

export default function Login() {

  const login = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      {/* onsumbit is added to the form to be usable after is defined as button and also requires a function to work */}
      <form onSubmit={login} >
      <label>Email</label>
        <input type='email' placeholder='enter email...' />
        <label>Password</label>
        <input type='password' placeholder='enter password...' />
        <button type='submit' >Login</button>
      </form>
    </div>
  )
}
