const MySql = () =>
	{

const express = require('express');
const app = express();
require("dotenv").config()

require("./database/connction")



app.get('/', (req, res) => {

  res.send('Hello Express app!')
});

const port = process.env.PORT

app.listen(port, () => {
  console.log('server started (MySql) at port ' + port);
});
}





module.exports = MySql;