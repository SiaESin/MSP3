import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home'
import About from './Components/about'
import Books from './books/Books'
import Contact from './Contact'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'


function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={AboutDetails} />
          <Route exact path="/Books" component={BooksDetails} />
          <Route exact path="/Contact" component={ContactForm} />
          <Route exact path="/Sign-up" component={SignUpForm} />
          <Route exact path="/Login" component={LoginForm} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}



export default App;


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



