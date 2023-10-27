import React from "react";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BuyButtonComponent from "./stripe-payments/BuyButton";

import {imagePaths, author, cost, title, bookSummary} from "../Components/bookData";

  export default function BookDetails() {
	const { index } = useParams();
	const selectedBook = parseInt(index);
	console.log(index)

	return (
		<main className="book-details">
			<h1>{title[selectedBook]}</h1>
			<div className="grid-container">
				{/* <img src={imagePaths[selectedBook]} alt={`Poster for ${title[selectedBook]}`} /> */}
				<div className="buy-button"><BuyButtonComponent /></div>
				<p className="author">{author[selectedBook]}</p>
				<p className="cost">{cost[selectedBook]}</p>
				<p className="summary">{bookSummary[selectedBook]}</p>
			</div>
	 </main>
	);
  }