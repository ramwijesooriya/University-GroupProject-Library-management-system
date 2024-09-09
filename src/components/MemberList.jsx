// src/components/MemberList.jsx
function MemberList({ members }) {
  return (
    <div className="member-list p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Member List</h3>
      {members.length === 0 ? (
        <p className="text-gray-600 italic">No members available</p>
      ) : (
        <ul className="space-y-2">
          {members.map((member) => (
            <li
              key={member.id}
              className="p-4 bg-gray-50 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <span className="text-gray-700">
                <span className="font-semibold text-blue-600">{member.name}</span> -{' '}
                <span className="italic">{member.email}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MemberList;
