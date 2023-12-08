import React, { useState, useEffect } from "react";
import BooksList from "./Components/BooksList";
//import AddBookForm from "./Components/AddBookForm";
 
function App() {
  const [toggleBooks, setToggleBooks] = useState(true);
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    fetchBooks();
  }, []);
 
  const fetchBooks = async () => {
    const response = await fetch("https://dc6hj63wm0hfv.cloudfront.net/books");
    const data = await response.json();
    console.log(data, "response");
    setBooks(data);
  };
 
  return (
    <div class="App">
      <h1>Book Library</h1>
      <button
        onClick={() => {
          setToggleBooks(true);
        }}
      >
        Books
      </button>
      <button
        onClick={() => {
          setToggleBooks(false);
        }}
      >
        Authors
      </button>
      {toggleBooks ? (
        <div>
         {/* <AddBookForm fetchBooks={fetchBooks} />*/}
          <BooksList books={books} fetchBooks={fetchBooks} />
        </div>
      ) : (
        <p>Authors List</p>
      )}
    </div>
  );
}
 
export default App;