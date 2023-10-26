function Home() {
  return (
    <main>
      <h1>Book Boulevard</h1>
      <div >
        <img height="300" width="500" src="client/public/assets/Homepage cover 1 .jpg" alt="Book Cover" />
        <div>
          Photo by <a href="COVER PAGE LINK">Cover Page</a> on <a href="https://images.unsplash.com/photo-1512503959943-9d35a3636b51?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww">Unsplash</a>
        </div>
      </div>
      <a href="/books">
        {/* <button className="btn-primary">Home Page</button> */}
      </a>
    </main>
  );
}

export default Home;
  