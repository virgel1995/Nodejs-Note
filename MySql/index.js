const MySql = () =>
	{

const express = require('express');
const app = express();
require("./database/connction")



app.get('/', (req, res) => {

  res.send('Hello Express app!')
});



app.listen(3000, () => {
  console.log('server started (MySql)');
});
}





module.exports = MySql;