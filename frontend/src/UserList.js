import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function UserList({ users }) {
  const componentRef = useRef(null);

  const handleClick = () => {
    console.log(componentRef.current);
  };

  return (
    <div ref={componentRef} onClick={handleClick}>
      <h2>User List</h2>
      <ul className='list-group' style={{ width: '600px', margin: 'auto'}}>
        {users.map((user, index) => (
          <li key={index} className='list-group-item'>
            <span>{user.name}</span> - <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;