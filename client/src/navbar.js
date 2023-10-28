// import { useState, useEffect, useContext } from 'react'
// import { useHistory } from "react-router";
// import { CurrentUser } from '.client/src/contexts/CurrentUser.js';

export default function Nav() {
    return (
        <head>
            <nav className="flex-container">
                <div className="nav-link logo info"><a href="/">Home</a></div>
                <div className="nav-link logo info"><a href="/about">About</a></div>
                <div className="nav-link logo info"><a href="/books">Books</a></div>
                <div className="nav-link logo info"><a href="/contact">Contact</a></div>
                <div className="nav-link logo info"><a href="/login">Login</a></div>
                <div className="nav-link logo info"><a href="/register">Register</a></div>
            </nav>
            <h1><a href="/">Book Boulevard</a></h1>
        </head>
 
    )
}

// function Navigation() {

//     const history = useHistory()

//     const { currentUser } = useContext(CurrentUser)

//     let loginActions = (
//         <>
//             <li style={{ float: 'right' }}>
//                 <a href="#" onClick={() => history.push("/sign-up")}>
//                     Sign Up
//                 </a>
//             
//             <li style={{ float: 'right' }}>
//                 <a href="#" onClick={() => history.push("/login")}>
//                     Login
//                 </a>
//             
//         </>
//     )

//     if (currentUser) {
//         loginActions = (
//             <li style={{ float: 'right' }}>
//                 Logged in as {currentUser.firstName} {currentUser.lastName}
//             
//         )
//     }

    
// let LoginFormButton = null

// if (currentUser?.role === 'admin') {
//     LoginFormButtonButton = (
//         
//             <a href="#" onClick={() => history.push("/contexts/new")}>
//                 Add User
//             </a>
//         
//     )
// }

//     return (
//         <nav>
//             <ul>
//                 <a href="#" onClick={() => history.push("/")}>Home</a>
//                 <a href="#" onClick={() => history.push("/places")}>User</a>
//                 <a href="#" onClick={() => history.push("/places/new")}>Add User</a>
//                 {loginActions}
//             </ul>
//         </nav>
//     )
// }

// export default Navigation;