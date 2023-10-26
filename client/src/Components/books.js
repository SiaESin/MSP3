import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Legacy from "../books/Legacy.jpg";
import final from "../books/final.jpg";
import inheritance from "../books/inheritance.jpg";
import brothers from "../books/brothers.jpg";
import angelsdemons from "../books/angelsdemons.jpg";
import moon from "../books/moon.jpg";
import perks from "../books/perks.jpg";
import shelter from "../books/shelter.jpg"


import { Link } from "react-router-dom";


const imagePaths = [final, inheritance, brothers, angelsdemons, moon, perks, shelter, Legacy];  
 const booklist = ["final", "inheritance", "brothers", "angelsdemons","moon", "perks", "shelter", "Legacy"];

export default function books() {
  function formatbookTitle(title) {
    const words = title.split('-');
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
} // Add this closing curly brace

return (
    <main className="bookPage">
        {/* <NavBar /> */}
        <div className="grid-container">
            {booklist.map((book, index) => (
                <div className={`grid-item homebooks ${book}`} key={index}>
                    <img src={imagePaths[index]} alt={`Poster for ${book}`} />
                    <Link className="link" to={`/${book}`}>
                        <h3>{formatbookTitle(book)}</h3>
                    </Link>
                </div>
            ))}
        </div>
    </main>
);
            }



// This below code is the longer way to display books

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// export default function Books() {

//     return (
//         <main>
//             <h1>See our Amazing selection of Books!</h1>
//             <div class="row">
//         <div class="col-sm-6">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">The Inheritance Games</h5>
//               <p class="card-text">Jennifer Lynn Barnes </p>
//               <img src="./public/assets/inheritance.jpg" alt="Bookcover" />
//               <p class="card-text">$8.24</p>
//               {/* <Link to="/books" class="btn btn-primary">
//                 Purchase Here
//               </Link> */}
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">The Hawthorne Legacy</h5>
//               <p class="card-text">Jennifer Lynn Barnes</p>
//               <img src="" alt="Bookcover" />
//               <p class="card-text">$8.24</p>
//               {/* <Link to="/books" class="btn btn-primary">
//                 Purchase Here
//               </Link> */}
//             </div>
// </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">The Final Gambit</h5>
//               <p class="card-text">Jennifer Lynn Barnes</p>
//               <img src="" alt="Bookcover" />
//               <p class="card-text">$8.98</p>
//               {/* <Link to="/books" class="btn btn-primary">
//                 Purchase Here
//               </Link> */}
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">The Brothers Hawthorne</h5>
//               <p class="card-text">Jennifer Lynn Barnes</p>
//               <img src="" alt="Bookcover" />
//               <p class="card-text">$13.79</p>
//               {/* <Link to="/books" class="btn btn-primary">
//                 Purchase Here
//               </Link> */}
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Moon Called</h5>
//               <p class="card-text">Patricia Briggs</p>
//               <img src="" alt="Bookcover" />
//               <p class="card-text">$8.99</p>
//               {/* <Link to="/books" class="btn btn-primary">
//                 Purchase Here
//               </Link> */}
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Angels and Demons</h5>
//               <p class="card-text">Dan Brown</p>
//               <img src="" alt="Bookcover" />
//               <p class="card-text">$9.92</p>
//               {/* <Link to="/books" class="btn btn-primary">
//                 Purchase Here
//               </Link> */}
//             </div>
//           </div>
// <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Shelter</h5>
//               <p class="card-text">Harlan Coben</p>
//               <img src="" alt="Bookcover" />
//               <p class="card-text">$10.78</p>
//               {/* <Link to="/books" class="btn btn-primary">
//                 Purchase Here
//               </Link> */}
//             </div>
//           </div>
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">The Perks of being a WallFlower</h5>
//               <p class="card-text">Stephen Chbosky</p>
//               <img src="" alt="Bookcover" />
//               <p class="card-text">$10.03</p>
//               {/* <Link to="/books" class="btn btn-primary">
//                 Purchase Here
//               </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//         </main>
//     )
// }


// This is how our code started:

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Books() {

// 	const history = useNavigate()
	
// 	const [books, setBooks] = useState([])

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const response = await fetch(`http://localhost:3000/books`)
// 			const resData = await response.json()
// 			setBooks(resData)
// 		}
// 		fetchData()
// 	}, [])

// 	let booksFormatted = books.map((books) => {
// 		return (
// 			<div className="col-sm-6" key={books.id}>
// 				<h2>
// 					<a href="#" onClick={() => history.push(`/books/${books.id}`)} >
// 						{books.name}
// 					</a>
// 				</h2>
// 				<p className="text-center">
// 					{books.description}
// 				</p>
// 				<img style={{ maxWidth: 200 }} src={books.pic} alt={books.name} />
// 				<p className="text-center">
// 					{books.price}
// 				</p>
// 			</div>
// 		)
// 	})
// 	return (
// 		<main>
// 			<h1>See our Amazing selection of Books!</h1>
// 			<div className="row">
// 				{booksFormatted}
// 			</div>
// 		</main>
// 	)
// }