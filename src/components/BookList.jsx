// src/components/BookList.jsx
function BookList({ books }) {
  return (
    <div className="book-list p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Book List</h3>
      {books.length === 0 ? (
        <p className="text-gray-600 italic">No books available</p>
      ) : (
        <ul className="space-y-2">
          {books.map((book, index) => (
            <li
              key={index}
              className="p-4 bg-gray-50 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <span className="text-gray-700">
                <span className="font-semibold text-blue-600">{book.title}</span> by{' '}
                <span className="italic">{book.author}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
