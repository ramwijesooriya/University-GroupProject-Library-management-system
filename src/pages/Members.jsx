// src/components/Members.jsx
import { useState } from 'react';
import MemberForm from '../components/MemberForm';
import MemberList from '../components/MemberList';

function Members() {
  const [members, setMembers] = useState([]);

  // Function to add a new member to the list
  const addMember = (newMember) => {
    setMembers([...members, newMember]); // Add the new member to the existing list
  };

  return (
    <div className="members">
      <h2>Members Management</h2>
      <MemberForm addMember={addMember} />
      <MemberList members={members} />
    </div>
  );
}

export default Members;
