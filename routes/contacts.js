const express = require('express')
const app = express()

app.use(express.json());
const {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact
} = require("../controllers/contactsController")

const router = express.Router()

router.get('/', getContacts)

router.get('/:id', getContact)

router.post('/', createContact)

router.delete('/:id', deleteContact)

router.put('/:id', updateContact)

module.exports = router