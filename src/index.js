const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(express.static('../public'));
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
const route = require('./routes/client/index.route.js');
route(app);
