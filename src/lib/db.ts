// lib/db.ts

import mysql from 'mysql2';

// Create a connection pool to your MySQL database
const pool = mysql.createPool({
  host: 'localhost', // Replace with your MySQL host (localhost for local or remote DB)
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'politeknik_widyatama', // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Create a promise wrapper around the connection pool for async/await usage
const promisePool = pool.promise();

export default promisePool;