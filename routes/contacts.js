const express = require('express')
const {
  getContacts,
  getContact
} = require("../controllers/contactsController")

const router = express.Router()

router.get('/', getContacts)

router.get('/:id', getContact)

module.exports = router