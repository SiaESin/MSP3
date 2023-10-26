export default function Nav() {

    return (
        <nav className="flex-container">
            <div className="nav-link"><a href="/">Book Boulevard</a></div>
            <div className="nav-link"><a href="/about">About</a></div>
            <div className="nav-link"><a href="/books">Books</a></div>
            <div className="nav-link"><a href="/contact">Contact</a></div>
            <div className="nav-link"><a href="/login">Login</a></div>
            <div className="nav-link"><a href="/signup">Sign Up</a></div>
        </nav>
    )
}



// import { useState, useEffect, useContext } from 'react'
// import { useHistory } from "react-router";
// import { CurrentUser } from '.client/src/contexts/CurrentUser.js';
// import { CurrentUserProvider } from '.client/src/contexts/CurrentUser.js';
// import { bookdetails }   from '.client/src/Components/bookdetails.js';

// const checkout = async () => {
//     await fetch('http://localhost:3001/checkout', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({items: cart.items})
//     }).then((response) => {
//         return response.json();
//     }).then((response) => {
//         if(response.url) {
//             window.location.assign(response.url);
//         }
//     });
// }
        
// export default function Nav() {

//     return (
//         <nav>
//             <ul>
//                 <li><a href="/">Book Boulevard</a></li>
//                 <li><a href="/about">About</a></li>
//                 <li><a href="/books">Books</a></li>
//                 {/* <li><a href="/bookdetails">Book Details</a></li> */}
//                 <li><a href="/contact">Contact</a></li>
//                 <li><a href="/login">Login</a></li>
//                 <li><a href="/signup">Sign Up</a></li>
//             </ul>
//         </nav>
//     )
// }

// export default Navigation; 

// new code including button for stripe


// // function Navigation() {
//     return (
//         <Navigation expand="sm">
//             <Navigation.Brand href="/">Book Boulevard</Navigation.Brand>
//             <Navigation.Toggle /> this allows us to toggle and reduce the size if this is being viewed on a mobile 
//             <Navigation.Collapse className="justify-content-end">    
//             <Button> Cart 0 Items</Button>
//             </Navigation.Collapse>
//             </Navigation>
//     )
// }

// <Button variant="success" onClic>
//     Purchase Items!
// </Button>
// </>




// Disregard this snippet from client/src/Navigation.js

// function Navigation() {

//     const history = useHistory()

//     const { currentUser } = useContext(CurrentUser)

//     let loginActions = (
//         <>
//             <li style={{ float: 'right' }}>
//                 <a href="#" onClick={() => history.push("/sign-up")}>
//                     Sign Up
//                 </a>
//             </li>
//             <li style={{ float: 'right' }}>
//                 <a href="#" onClick={() => history.push("/login")}>
//                     Login
//                 </a>
//             </li>
//         </>
//     )

//     if (currentUser) {
//         loginActions = (
//             <li style={{ float: 'right' }}>
//                 Logged in as {currentUser.firstName} {currentUser.lastName}
//             </li>
//         )
//     }

    
// let LoginFormButton = null

// if (currentUser?.role === 'admin') {
//     LoginFormButtonButton = (
//         <li>
//             <a href="#" onClick={() => history.push("/contexts/new")}>
//                 Add User
//             </a>
//         </li>
//     )
// }