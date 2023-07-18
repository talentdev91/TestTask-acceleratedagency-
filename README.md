# Part 1: NodeJS
Application to Store users as manager/player and manager can sell/buy players.
- Create a NodeJS server that listens on port 3000 and responds to the route "/hello" with the message "Hello World!".
- Create a function in NodeJS that takes in an array of integers and returns the sum of all even numbers in the array.
- Create a function in NodeJS which runs automatically every 5 seconds and puts a message (“”QUERY RUNNING) in console. 

How to run: 
Initialize the project by running the command `npm init` in the backend repository
Install the required dependencies by running the command `npm install express` in the directory. 
Run the command `node server.js` to start the server.
if you open your web browser and navigate to `http://localhost:3000/hello`, you should see the message "Hello World!" displayed on the page.
when you access `http://localhost:3000/sum` in your browser, you should see a response that says "Sum of even numbers: 20", which is the result of the sumOfEvenNumbers function calculation for the array [1, 2, 3, 4, 5, 6, 7, 8].

# Part 2: MongoDB
- Create a MongoDB database called "testdb" with a collection called "users".
- Add a new user to the "users" collection with the following information:
  . Name: John Doe
  . Email: john.doe@example.com
  . Password: password123
  . Token (USE JWT for tokens)
- Write a MongoDB query that retrieves all users with the email domain "example.com". 

How to run: 
Install the MongoDB Node.js driver by running the following command in your project directory: `npm install mongodb`
You can dump the script file `testdb.sql` to check it. 
Additionally, you'll need to install the jsonwebtoken module for generating JWT tokens nu following command `npm install jsonwebtoken`.
Run the code using Node.js by executing the command `node db.js` in the backend repository.

# Part 3: ReactJS
- Create a React component that displays a list of user names and email addresses. The component should receive an array of user objects as a prop.
- Create a ref inside each of above component and show in console on click of component element.
- Create a Multi-step (2 steps) form in React that allows users to add a new user to the list.
Information should be captured in two steps and user should be able to go back and forth. The form should have fields for name, email, and password. 

How to run: 
Run the following command to initialize a new project in the front end repo: `npm init -y`
Run the following command to install React and ReactDOM: `npm install react react-dom`
Run the following command to install React Bootstrap: `npm install bootstrap`
Run the command `npm start` to start the development server.
You can now view frontend in the browser. 

# Part 4: GraphQL
- Create a GraphQL schema that defines the following types:
  . User: id, name, email, password
  . Query: getUsers, getUserById
  . Mutation: createUser, updateUser, deleteUser
- Implement the resolvers for the Query and Mutation types.
- Write a GraphQL query that retrieves all users from the database.

How to run: 
Install the required packages by following command in graphql repo: `npm install apollo-server graphql`
Run the server by executing the following command in the terminal: `node server.js`
Now you can see `Server running at https://localhost:4000` on the commmand
