import React from 'react'; // Import React if not already imported
// import ReactDOM from 'react-dom/client';
// import Homepage from '../books/Homepage.jpg';


function Home() {
  return (
    <main className='home'>
      <h1>Book Boulevard</h1>
      <img src="https://cdn.discordapp.com/attachments/1164397494466256948/1166923287306190848/Homepage_cover_1_.jpg?ex=654c4100&is=6539cc00&hm=7ffa8d8438bf2f16b1e02ba9493797324a3cbbbc8d0f7df165120ec9233f6974&"height={'100%'} width={'80%'} alt="Poster for Book Boulevard" />
      <p>
      Photo by <a href="Thought Catalog">Cover Page</a> on <a href="https://tinyurl.com/4ssvmnnh">Unsplash</a></p>
    </main>
  );
}

export default Home;
