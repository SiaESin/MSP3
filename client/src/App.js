import './App.css';
import { Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Home from './Components/home'
import Nav from './navbar'
import About from './Components/about'
import Books from './Components/books'
import Contact from './Components/contact'
import Login from './users/login'
import Register from './users/register'
import Registered from './Components/registered';
import BookDetails from './Components/bookdetails';
import { Toaster } from 'react-hot-toast';
import { CurrentUserProvider } from './contexts/CurrentUser';
import Dashboard from './users/dashboard';

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true


function App() {
  return (
      <div className="App">
        <CurrentUserProvider>
         
            <div className='navbar'>
              <Nav /> 
                <Toaster position="top-center" toastOptions={{duration: 3000}} />
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </ul>
            
            
            </div>
      <div className='display'>
          <Routes>
              
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/books" element={<Books />} />
                <Route path="/book/:index" element={<BookDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />} />           
                <Route path="/registered" element={<Registered />} />
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </div>
      
     </CurrentUserProvider>
    </div>
  )
}

export default App;

