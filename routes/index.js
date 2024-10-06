// const routes = require('express').Router()
// const lesson1Controller = require('../controllers/lesson1')
 
// routes.get('/', lesson1Controller.joeRoute);

// module.exports = routes

const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Create a router
const router = express.Router();

// Define a route that uses req.body
router.post('/', (req, res) => {
  const { name, email } = req.body;
  console.log('Received data:', req.body);

  // Do something with the data
  // ...

  res.send('User created!');
});

module.exports = router