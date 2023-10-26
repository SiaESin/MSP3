import {  useState } from "react"
import axios from "axios"
// import { CurrentUser } from "../contexts/CurrentUser"

export default function Login() {
    const [data , setData] = useState({
        email: '',
        password: '',
    })
    const loginUser = (e) => {
        e.preventDefault()
            axios.get('/')
    }

    return (
        <div>
            <form onSubmit={loginUser}>
            <label>Email</label>
            <input type="email" placeholder='Enter Email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}/>
            <label>Password</label>
            <input type="password" placeholder='Enter Password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}


//     const history = useNavigate()

//     const { setCurrentUser } = useContext(CurrentUser)

//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: ''
//     })

//     const [errorMessage, setErrorMessage] = useState(null)
         
// async function handleSubmit(e) {
//     e.preventDefault()
//     const response = await fetch(`http://localhost:3000/authentication/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })

//     const data = await response.json()

//     if (response.status === 200) {
//         setCurrentUser(data.user)
//         localStorage.setItem('token', data.token)
//         console.log(data.token)
//         history.push(`/`)
//     } else {
//         setErrorMessage(data.message)
//     }
// }

//     return (
//         <main>
//             <h1>Login</h1>
//             {errorMessage !== null
//                 ? (
//                     <div className="alert alert-danger" role="alert">
//                         {errorMessage}
//                     </div>
//                 )
//                 : null
//             }
//             <form onSubmit={handleSubmit}>
//                 <div className="row">
//                     <div className="col-sm-6 form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             required
//                             value={credentials.email}
//                             onChange={e => setCredentials({ ...credentials, email: e.target.value })}
//                             className="form-control"
//                             id="email"
//                             name="email"
//                         />
//                     </div>
//                     <div className="col-sm-6 form-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             required
//                             value={credentials.password}
//                             onChange={e => setCredentials({ ...credentials, password: e.target.value })}
//                             className="form-control"
//                             id="password"
//                             name="password"
//                         />
//                     </div>
//                 </div>
//                 <input className="btn btn-primary" type="submit" value="Login" />
//             </form>
//         </main>
//     )

    
// }