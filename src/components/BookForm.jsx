// src/components/BookForm.jsx
import { useState } from 'react';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!title || !author) {
      setError('Both title and author are required');
      return;
    }

    // Create a new book object
    const newBook = { id: Date.now(), title, author };

    // Add the new book to the list
    addBook(newBook);

    // Reset the form
    setTitle('');
    setAuthor('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
