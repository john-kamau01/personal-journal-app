// This file is for Database configurations
const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if(err){
        console.log('Could not connect to Database:', err.stack);
        return;
    }

    console.log('Database connected successfully');
});


module.exports = connection;