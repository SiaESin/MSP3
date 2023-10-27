import React from "react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Legacy from "../books/Legacy.jpg";
import final from "../books/final.jpg";
import inheritance from "../books/inheritance.jpg";
import brothers from "../books/brothers.jpg";
import angelsdemons from "../books/angelsdemons.jpg";
import moon from "../books/moon.jpg";
import perks from "../books/perks.jpg";
import shelter from "../books/shelter.jpg";
import {booklist, bookSummary, authors, cost} from "../Components/bookData";
import BuyButtonComponent from "./stripe-payments/BuyButton";

const books = [booklist, bookSummary, authors, cost];

  export default function BookDetails({ book }) {
	// const bookFromURL = window.location.pathname.replace("/", "");

	// const selectedBookIndex = booklist.index(bookFromURL);

	return (
	  <main className="book-details">
			<h1>Perks of Being a Wallflower</h1>
			<img width="400px" src={perks} alt={`Perks of Being a Wallflower`} />
			<p>Stephen Chbosky</p>
			<p>$20</p>
			<p>"Standing on the fringes of life offers a unique perspective. But there comes a time to see what it looks like from the dance floor. This haunting novel about the dilemma of passivity vs. passion marks the stunning debut of a provocative new voice in contemporary fiction: The Perks of Being a Wallflower. This is the story of what it is like to grow up in high school. More intimate than a diary, Charlies letters are singular and unique, hilarious and devastating. We may not know where he lives. We may not know to whom he is writing. All we know is the world he shares. Caught between trying to live his life and trying to run from it puts him on a strange course through uncharted territory. The world of first dates and mixed tapes, family dramas and new friends. The world of sex, drugs, and The Rocky Horror Picture Show, when all one requires is that perfect song on that perfect drive to feel infinite.  Through Charlie, Stephen Chbosky has created a deeply affecting coming-of-age story, a powerful novel that will spirit you back to those wild and poignant roller coaster days known as growing up.",</p>
			<BuyButtonComponent />
			<script
   		 	async
    		src="https://js.stripe.com/v3/buy-button.js">
  			</script>
	 </main>
	);
  }

//   return (
// 	<main className="book-details">
// 		  <h1>Perks of Being a Wallflower</h1>
// 	  <div className="book-details">
// 		  <h1>{book.title}</h1>
// 		  <img src={book.image} alt={`Poster for ${book.title}`} />
// 		  <p className="author">{book.author}</p>
// 		  <p className="cost">{book.cost}</p>
// 		  <p className="summary">{book.summary}</p>
// 	  </div>
//    </main>
//   );

// this is the code from up above




// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router"

// export default function BookDetails() {

// 	const { bookId } = useParams()

// 	const history = useNavigate()

// 	const [book, setBook] = useState({
//         name: '',
//         author: '',
//         description: '',
//         price: 0,
//         image: '',
//     });

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const response = await fetch(`http://localhost:3000/bookdetails/${bookId}`)
// 			const resData = await response.json()
// 			setBook(resData)
// 		}
// 		fetchData()
// 	}, [bookId])

// 	if (book === null) {
// 		return <h1>book not found</h1>
// 	}

// 	function editBook() {
// 		history.push(`/bookdetails/${book.bookId}/edit`)
// 	}
	
// 	return (
// 		<div>
// 			<h1>Book Details</h1>
// 		</div>
// 	)
// }






















// // // 	async function deletePlace() {
// // // 		await fetch(`http://localhost:5000/places/${place.placeId}`, {
// // // 			method: 'DELETE'
// // // 		})
// // // 		history.push('/places')
// // // 	}

// // // 	async function deleteComment(deletedComment) {
// // // 		await fetch(`http://localhost:5000/places/${place.placeId}/comments/${deletedComment.commentId}`, {
// // // 			method: 'DELETE'
// // // 		})

// // // 		setPlace({
// // // 			...place,
// // // 			comments: place.comments
// // // 				.filter(comment => comment.commentId !== deletedComment.commentId)
// // // 		})
// // // 	}

// // // 	async function createComment(commentAttributes) {
// // // 		const response = await fetch(`http://localhost:5000/places/${place.placeId}/comments`, {
// // // 			method: 'POST',
// // // 			headers: {
// // // 				'Content-Type': 'application/json',
// // // 				'Authorization': `Bearer ${localStorage.getItem('token')}`
// // // 			},
// // // 			body: JSON.stringify(commentAttributes)
// // // 		})

// // // 		const comment = await response.json()

// // // 		setPlace({
// // // 			...place,
// // // 			comments: [
// // // 				...place.comments,
// // // 				comment
// // // 			]
// // // 		})

// // // 	}

// // // 	let comments = (
// // // 		<h3 className="inactive">
// // // 			No comments yet!
// // // 		</h3>
// // // 	)
// // // 	let rating = (
// // // 		<h3 className="inactive">
// // // 			Not yet rated
// // // 		</h3>
// // // 	)
// // // 	if (place.comments.length) {
// // // 		let sumRatings = place.comments.reduce((tot, c) => {
// // // 			return tot + c.stars
// // // 		}, 0)
// // // 		let averageRating = Math.round(sumRatings / place.comments.length)
// // // 		let stars = ''
// // // 		for (let i = 0; i < averageRating; i++) {
// // // 			stars += '⭐️'
// // // 		}
// // // 		rating = (
// // // 			<h3>
// // // 				{stars} stars
// // // 			</h3>
// // // 		)
// // // 		comments = place.comments.map(comment => {
// // // 			return (
// // // 				<CommentCard 
// // // 				key={comment.commentId} 
// // // 				comment={comment} onDelete={() => 
// // // 				deleteComment(comment)} 
// // // 				/>
// // // 			)
// // // 		})
// // // 	}

// // // let placeActions = null

// // // if (currentUser?.role === 'admin') {
// // //     placeActions = (
// // //         <>
// // //             <a className="btn btn-warning" onClick={editPlace}>
// // //                 Edit
// // //             </a>
// // //             <button type="submit" className="btn btn-danger" onClick={deletePlace}>
// // //                 Delete
// // //             </button>
// // //         </>
// // //     )
// // // }

// // 	// return (
// // 	// 	<main>
// // 	// 		<div className="row">
// // 	// 			<div className="col-sm-6">
// // 	// 				<img style={{ maxWidth: 200 }} src={place.pic} alt={book.name} />
// // 	// 				<h3>
// // 	// 					Located in {book.city}, {book.state}
// // 	// 				</h3>
// // 	// 			</div>
// // 	// 			<div className="col-sm-6">
// // 	// 				<h1>{book.name}</h1>
// // 	// 				<h2>
// // 	// 					Rating
// // 	// 				</h2>
// // 	// 				{rating}
// // 	// 				<br />
// // 	// 				<h2>
// // 	// 					Description
// // 	// 				</h2>
// // 	// 				<h3>
// // 	// 					{book.name} has been serving {book.city}, {book.state} since {book.founded}.
// // 	// 				</h3>
// // 	// 				<h4>
// // 	// 					Serving {book.cuisines}.
// // 	// 				</h4>
// // 	// 				<br />
// // 	// 				<a className="btn btn-warning" onClick={editPlace}>
// // 	// 					Edit
// // 	// 				</a>{` `}
// // 	// 				<button type="submit" className="btn btn-danger" onClick={deletePlace}>
// // 	// 					Delete
// // 	// 				</button>
// // 	// 			</div>
// // 	// 		</div>
// // 	// 		<hr />
// // 	// 		<h2>Comments</h2>
// // 	// 		<div className="row">
// // 	// 			{comments}
// // 	// 		</div>
// // 	// 		<hr />
// // 	// 		<h2>Got Your Own Rant or Rave?</h2>
// // 	// 		<NewCommentForm
// // 	// 			place={place}
// // 	// 			onSubmit={createComment}
// // 	// 		/>
// // 	// 	</main>
// // 	// )
// // // }

// // // export default Placedetails