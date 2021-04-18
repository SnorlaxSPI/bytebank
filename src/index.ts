import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Login'});
})

app.listen(3333);

