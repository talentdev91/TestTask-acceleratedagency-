// const users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
// ];
import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div style={{ width: '1000px', margin: 'auto', textAlign: 'center'}}>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;