import React from 'react'; // Import React if not already imported
// import ReactDOM from 'react-dom/client';
// import Homepage from '../books/Homepage.jpg';


function Home() {
  return (
    <main className='home'>
        <div className='flex-container'>
          <h3><b>Welcome.</b><br />Book Boulevard is not just a store; it's a haven for the community's literary souls. Its cozy interior and friendly, knowledgeable staff make it a delightful place to explore.<br /> Whether you're seeking a thrilling novel to escape into, a thought-provoking non-fiction book, or a unique gift for a fellow book lover, Book Boulevard is the go-to destination. <br />This local bookstore embodies the spirit of the written word, where stories come to life, and where bibliophiles of all ages find their refuge in a world of endless imagination.</h3>
          <img src="https://cdn.discordapp.com/attachments/1164397494466256948/1166923287306190848/Homepage_cover_1_.jpg?ex=654c4100&is=6539cc00&hm=7ffa8d8438bf2f16b1e02ba9493797324a3cbbbc8d0f7df165120ec9233f6974&"height={'100%'} width={'80%'} alt="Poster for Book Boulevard" />
        </div>
    </main>
  );
}

export default Home;
