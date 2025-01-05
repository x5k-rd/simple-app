import { Link } from 'react-router-dom'

// definde navigation bar links which are usable
export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/register'>Resgiter</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}
