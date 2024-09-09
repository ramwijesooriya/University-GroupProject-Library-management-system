// src/components/MemberForm.jsx
import { useState } from 'react';

function MemberForm({ addMember }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email) {
      setError('Both name and email are required');
      return;
    }

    // Create a new member object
    const newMember = { id: Date.now(), name, email };

    // Add the new member to the list
    addMember(newMember);

    // Reset the form
    setName('');
    setEmail('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="member-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default MemberForm;
