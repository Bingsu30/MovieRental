// Import the class
const db_connection = require('./db_connection');

// Create an instance of the class
const db = new db_connection();

// Call a method on the instance
const records = db.connectToDb();
 console.log(records);

