import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Members from './pages/Members';
import './styles.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
