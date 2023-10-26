// import { useState, useEffect, useContext } from 'react'
// import { useHistory } from "react-router";
// import { CurrentUser } from '.client/src/contexts/CurrentUser.js';

export default function Nav() {

    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/books">Books</a></li>
                {/* <li><a href="/bookdetails">Book Details</a></li> */}
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </nav>
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

//     return (
//         <nav>
//             <ul>
//                 <li><a href="#" onClick={() => history.push("/")}>Home</a></li>
//                 <li><a href="#" onClick={() => history.push("/places")}>User</a></li>
//                 <li><a href="#" onClick={() => history.push("/places/new")}>Add User</a></li>
//                 {loginActions}
//             </ul>
//         </nav>
//     )
// }

// export default Navigation;