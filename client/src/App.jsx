import './App.css'
//static items on page are not put within routes 
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';


axios.defaults.baseURL = 'https://shiny-cod-r4q6q4jvv9x25v94-8000.app.github.dev/';
axios.defaults.withCredentials = true

function App() {
  return (
    // wrap the entire app with ContextProvide that allows to use the state defined in context, useEffect always starts when new page renders for a logged in user
    <UserContextProvider>
    {/* navbar or static items are not put inside routes */}
     <Navbar />
     {/* 2 sec notifications */}
     <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
     <Routes>
      {/* '/' is the home page path & element for the each route */}
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
     </Routes>
    </UserContextProvider>
  )
}

export default App;
