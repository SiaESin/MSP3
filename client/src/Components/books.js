// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import book from "../books/final.jpg";
import final from "../books/final.jpg";
import inheritance from "../books/inheritance.jpg";
import brothers from "../books/brothers.jpg";
import angelsdemons from "../books/angelsdemons.jpg";
import moon from "../books/moon.jpg";
import perks from "../books/perks.jpg";
import shelter from "../books/shelter.jpg";


import { Link } from "react-router-dom";


const imagePaths = [final,inheritance,brothers,angelsdemons,moon,perks, shelter ];
const booklist = ["final", "inheritance", "brothers", "angelsdemons","moon", "perks", "shelter"];

export default function books() {
    function formatbookTitle(title) {
        const words = title.split('-');
        const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return formattedWords.join(' ');
      }
    return (
        <main className="bookPage">
            {/* <NavBar /> */}
                <div className="grid-container">
                    {booklist.map((book, index) => (
                        <div className={`grid-item homebook ${book}`} key={index}>
                            <img src={imagePaths[index]} alt={`Poster for ${book}.`} />
                            <Link className="link" to={`/${book}`}>
                            <h3>{formatbookTitle(book)}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
        </main>
    );
}