const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  console.log('#### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at port 3000!'));
