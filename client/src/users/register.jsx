import { useState } from 'react';
import axios from 'axios';  
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data
    try {
      const { data } = await axios.post('/register', { name, email, password });
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Registration Successful')
        navigate('/')
        }
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>First Name</label>
        <input type="text" placeholder='Enter First Name...' value= {data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })}/>
        <label>Last Name</label>
        <input type="text" placeholder='Enter Last Name...' value= {data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })}/>
        <label>Email</label>
        <input type="email" placeholder='Enter Email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        <label>Password</label>
        <input type="password" placeholder='Enter Password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
  }
 
 
 
 
 
 
 
  // const history = useNavigate();

  // const [user, setUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

//   async function handleSubmit(e) {
//     e.preventDefault();

//     await fetch(`http://localhost:5000/users/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     });

//     history.push('/');
//   }

//   return (
//     <main>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-sm-6 form-group">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               required
//               value={user.firstName}
//               onChange={(e) => setUser({ ...user, firstName: e.target.value })}
//               className="form-control"
//               id="firstName"
//               name="firstName"
//             />
//           </div>
//           <div className="col-sm-6 form-group">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               required
//               value={user.lastName}
//               onChange={(e) => setUser({ ...user, lastName: e.target.value })}
//               className="form-control"
//               id="lastName"
//               name="lastName"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-6 form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               required
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               className="form-control"
//               id="email"
//               name="email"
//             />
//           </div>
//           <div className="col-sm-6 form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               required
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//               className="form-control"
//               id="password"
//               name="password"
//             />
//           </div>
//         </div>
//         <input className="btn btn-primary" type="submit" value="Sign Up" />
//       </form>
//     </main>
//   );
// }
