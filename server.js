require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require("mongoose")

app.use(express.json())


app.use('/', require('./routes/index'))
app.use('/contacts', require('./routes/contacts'))

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })



