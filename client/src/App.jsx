import './App.css'
//static items on page are not put within routes 
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import axios from 'axios';


axios.defaults.baseURL = 'https://shiny-cod-r4q6q4jvv9x25v94-8000.app.github.dev/';
axios.defaults.withCredentials = true

function App() {
  return (
    <>
    {/* navbar or static items are not put inside routes */}
     <Navbar />
     <Routes>
      {/* '/' is the home page path & element for the each route */}
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
     </Routes>
    </>
  )
}

export default App;
