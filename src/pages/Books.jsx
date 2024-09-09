// src/components/Books.jsx
import { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

function Books() {
  const [books, setBooks] = useState([]);

  // Function to add a new book to the list
  const addBook = (newBook) => {
    setBooks([...books, newBook]); // Add the new book to the existing list
  };

  return (
    <div className="books">
      <h2>Books Management</h2>
      <BookForm addBook={addBook} />
      <BookList books={books} />
    </div>
  );
}

export default Books;
