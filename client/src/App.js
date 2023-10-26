import './App.css';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import Home from './Components/home'
import Nav from './navbar'
import About from './Components/about'
import Books from './Components/books'
import Contact from './Components/contact'
import LoginForm from './users/login'
import SignUpForm from './users/signup'

function App() {
  return (
      <div className="App">
        <Nav />
        <Toaster position="top-center" toastOptions={{duration: 3000}} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
  
  )
}

export default App;


{/* <Route path="/bookdetails" element={<BookDetails />} /> */} 

    // <CurrentUserProvider>
    //   <BrowserRouter>
    //     <Navigation />
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/About" component={AboutDetails} />
    //       <Route exact path="/Books" component={BooksDetails} />
    //       <Route exact path="/Contact" component={ContactForm} />

    //       <Route exact path="/Login" component={LoginForm} />
    //       <Route exact path="/Sign-up" component={SignUpForm} />
    //       <Route path="/" component={Error404} />
    //     </Switch>
    //   </BrowserRouter>
    // </CurrentUserProvider>

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './Home'
// import PlaceIndex from './places/PlaceIndex'
// import PlaceDetails from './places/PlaceDetails'
// import Navigation from './Navigation'
// import Error404 from './Error404'
// import NewPlaceForm from './places/NewPlaceForm'
// import EditPlaceForm from './places/EditPlaceForm'
// import SignUpForm from './users/SignUpForm'
// import LoginForm from './users/LoginForm'
// import CurrentUserProvider from './contexts/CurrentUser'