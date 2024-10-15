const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config()

const doc = {
  info: {
    title: 'My API'
  },
  host: 'https://cse-341-jzht.onrender.com',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)