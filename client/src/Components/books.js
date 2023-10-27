import React from "react";
import { Link } from "react-router-dom";
import { imagePaths, author, cost, title } from "../Components/bookData";

export default function books() {

  return (
    <main className="books">
      <h1>Books</h1>
      <div className="grid-container">
        {title.map((book, index) => (
          <div className={`grid-item homebooks ${book}`} key={index}>
            <img src={imagePaths[index]} alt={`Poster for ${book}`} />
            <Link to={`/book/${index}`}>
              <h3>{`${book}`}</h3>
            </Link>
            <p className="author">{author[index]}</p>
            <p className="cost">{cost[index]}</p>
        
          </div>
        ))}
      </div>
    </main>
  );
}