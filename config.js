const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Oktoober11@mysql',
  database: 'expressJs',
});

connection.connect();
connection.end();