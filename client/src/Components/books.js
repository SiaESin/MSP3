import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export default function Books() {

	const history = useHistory()
	
	const [books, setBooks] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/books`)
			const resData = await response.json()
			setBooks(resData)
		}
		fetchData()
	}, [])

	let booksFormatted = books.map((books) => {
		return (
			<div className="col-sm-6" key={books.id}>
				<h2>
					<a href="#" onClick={() => history.push(`/books/${books.id}`)} >
						{books.name}
					</a>
				</h2>
				<p className="text-center">
					{books.description}
				</p>
				<img style={{ maxWidth: 200 }} src={books.pic} alt={books.name} />
				<p className="text-center">
					{books.price}
				</p>
			</div>
		)
	})
	return (
		<main>
			<h1>See our Amazing selection of Books!</h1>
			<div className="row">
				{booksFormatted}
			</div>
		</main>
	)
}