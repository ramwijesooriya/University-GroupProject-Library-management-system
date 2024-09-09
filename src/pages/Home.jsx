// src/components/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Library Management System
      </h1>
      <nav className="flex gap-4 mb-6">
        <Link
          to="/books"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Manage Books
        </Link>
        <Link
          to="/members"
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition"
        >
          Manage Members
        </Link>
      </nav>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 text-white bg-indigo-600 rounded shadow hover:bg-indigo-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 text-indigo-600 bg-white border border-indigo-600 rounded shadow hover:bg-indigo-50 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
