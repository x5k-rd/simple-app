

export default function Register() {
  // create an arrow function for the onSubmit register & button
  // e = event
  const registerUser = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='Text' placeholder='enter name...' />
        <label>Email</label>
        <input type='email' placeholder='enter email...' />
        <label>Password</label>
        <input type='password' placeholder='enter password...' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
