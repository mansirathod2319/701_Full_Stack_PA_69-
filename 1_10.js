const mysql = require('mysql2/promise');

// MySQL database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sem7_pa1_701',
};

// Function to connect to the database
async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL database!');
    return connection;
  } catch (error) {
    throw new Error('Error connecting to the database: ' + error.message);
  }
}

// Function to insert a record into the employee table
async function insertRecord(connection, employeeData) {
  try {
    const [result] = await connection.query('INSERT INTO employee SET ?', employeeData);
    console.log('Record inserted successfully!');
    return result;
  } catch (error) {
    throw new Error('Error inserting record: ' + error.message);
  }
}

// Function to fetch all records from the employee table
async function fetchAllRecords(connection) {
  try {
    const [rows] = await connection.query('SELECT * FROM employee');
    console.log('All records:');
    console.log(rows);
    return rows;
  } catch (error) {
    throw new Error('Error fetching records: ' + error.message);
  }
}

// Main function to run the program
async function main() {
  try {
    const connection = await connectToDatabase();

    // Sample employee data (replace with your own data)
    const employeeData = {
      name: 'Ram',
      department: 'CEO',
      salary: 5000000,
    };

    await insertRecord(connection, employeeData);
    await fetchAllRecords(connection);

    connection.end(); // Close the database connection

  } catch (error) {
    console.error(error.message);
  }
}

// Run the main function
main();