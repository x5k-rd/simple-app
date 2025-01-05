import './App.css'
//static items on page are not put within routes 
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';

function App() {
  return (
    <>
    {/* navbar or static items are not put inside routes */}
     <Navbar />
     <Routes>
      {/* '/' is the home page path & element for the each route */}
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Login />} />
     </Routes>
    </>
  )
}

export default App;