const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const cors = require('cors');
// const connectionString = "postgres://franklinfloresca@localhost/franklinfloresca";
const products_controller = require('./products_controller');

const port = 3000;
const app = module.exports = express();
app.use(json());
app.use(cors());
massive({
  host: 'localhost',
  port: 5432,
  database: 'franklinfloresca',
  user: 'franklinfloresca',
  password: 'password'
}).then( dbInstance => app.set('db', dbInstance) );


app.get('/api/products', products_controller.getAll);
app.get('/api/product/:id', products_controller.getOne);

app.put('/api/product/:id', products_controller.update);

app.post('/api/product', products_controller.create);

app.delete('/api/product/:id', products_controller.delete);


app.listen(port, () => console.log(`listening on port ${port}`));

