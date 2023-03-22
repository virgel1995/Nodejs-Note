
const connection = require("./connection");

// create database 
const createDatabase = (dbName) =>{
	const sql = `CREATE DATABASE ${dbName}`;
	connection.query(sql, async (err, res, fields) =>{
		//catch err
		if(err) throw err;
		// console response if no err
		console.log(res)
	})
}

// create Tables
// User Table 

const usersTable = () => {
	
const sql = 'CREATE TABLE users ( userId int NOT NULL,name varchar(255),email varchar(255),password varchar(25),PRIMARY KEY (userId),UNIQUE (email))';
	
	connection.query(sql, async (err, res, fields) => {
		//catch err
		if(err) throw err;
		// console response if no err
		console.log(res)
	});
}












													 

const createUser = (name, password, email) => {
	const sql = `INSERT INTO table_name (name, email, password)
VALUES (nname}, ${email} , ${password});`

	connection.query(sql, async (err, res, fields) =>{
		//catch err
		if(err) throw err;
		// console response if no err
		console.log(res)
	})

}										

module.exports = {
createDatabase,
usersTable,


createUser
	
}