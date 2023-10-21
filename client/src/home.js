function Home() {
    return (
      <main>
        <h1>HOME</h1>
        <div >
          <img height="300" width="500" src="client/public/assets/inheritance.jpg" alt="Book Cover" />
          <div>
            Photo by <a href="AUTHOR_LINK">Jennifer Lynne Barnes</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Home Page</button>
        </a>
      </main>
    );
  }
  
  export default Home;
  