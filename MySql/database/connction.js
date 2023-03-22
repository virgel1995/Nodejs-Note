var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'sql8.freemysqlhosting.net',
  user     : 'sql8607846',
  password : 'SaM9DA8wS3'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
	}
  console.log('DB connected as id ' + connection.threadId);
});

module.exports = connection;