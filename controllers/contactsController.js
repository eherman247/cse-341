const Contact = require('../models/contactsModel')
const mongoose = require('mongoose')

const getContacts = async (req, res) => {
  const contacts = await Contact.find({}).sort()

  res.status(200).json(contacts)
}

const getContact = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such contact"})
  }

  const contact = await Contact.findById(id)

  if(!contact) {
    return res.status(404).json({error: "No such contact"})
  }

  res.status(200).json(contact)
}

module.exports = {getContacts, getContact}