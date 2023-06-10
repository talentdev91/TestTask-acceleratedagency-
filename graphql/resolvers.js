const { MongoClient } = require('mongodb');

// Connect to the MongoDB database
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();

// Fetch users from the database
async function fetchUsers() {
  try {
    const db = client.db('testdb');
    const collection = db.collection('users');
    const users = await collection.find().toArray();
    return users;
  } catch (error) {
    console.error('Error fetching users from the database:', error);
    throw error;
  }
}

// how to Implement the resolvers for the Query and Mutation types.

  const resolvers = {
    User: {
      id: (user) => {
        // Assuming the user object has an "_id" property
        if (user._id) {
          return user._id;
        }
        throw new Error('User ID is missing');
      },
      // Other fields and resolvers for the User type
    },
    Query: {

      //For the getUsers field, the resolver returns the entire users array.

      getUsers: async () => {
        try {
          const users = await fetchUsers();
          return users;
        } catch (error) {
          console.error('Error fetching users:', error);
          throw error;
        }
      },
      // For the getUserById field, the resolver searches for a user in the users array based on the provided id argument.

      getUserById: (parent, args) => users.find(user => user.id === args.id),
    },
    Mutation: {

      // For the createUser field, the resolver creates a new user object by combining the provided arguments with a generated id and adds it to the users array.

      createUser: (parent, args) => {
        const newUser = { id: String(users.length + 1), ...args };
        users.push(newUser);
        return newUser;
      },

      // For the updateUser field, the resolver finds the user in the users array based on the provided id argument and updates the user's properties with the provided arguments.

      updateUser: (parent, args) => {
        const userIndex = users.findIndex(user => user.id === args.id);
        if (userIndex !== -1) {
          const updatedUser = { ...users[userIndex], ...args };
          users[userIndex] = updatedUser;
          return updatedUser;
        }
        return null;
      },

      // For the deleteUser field, the resolver finds the user in the users array based on the provided id argument, removes the user from the array, and returns the deleted user object.
      
      deleteUser: (parent, args) => {
        const userIndex = users.findIndex(user => user.id === args.id);
        if (userIndex !== -1) {
          const deletedUser = users[userIndex];
          users.splice(userIndex, 1);
          return deletedUser;
        }
        return null;
      },
    },
  };
  
  module.exports = resolvers;