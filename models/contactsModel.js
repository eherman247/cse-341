const mongoose = require('mongoose')

const Schema = mongoose.Schema

const createContactSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  favoriteColor: {
    type: String
  },
  birthday: {
    type: Date
  }
})

module.exports = mongoose.model('contacts', createContactSchema)