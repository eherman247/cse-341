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

// create a new contact
const createContact = async (req, res) => {
  const {firstName, lastName, email, favoriteColor, birthday} = req.body
  let stuff = req.body
  console.log(stuff)
  // add to db
  try{
    const contact = await Contact.create({firstName, lastName, email, favoriteColor, birthday})
    res.status(200).json(contact)
  }catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a contact
const deleteContact = async (req, res) => {
const {id} = req.params

if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error: "No such contact"})
}

const contact = await Contact.findOneAndDelete({_id: id})

if(!contact) {
  return res.status(400).json({error: "No such contact"})
}

res.status(200).json(contact)
}

// update a contact
const updateContact = async (req, res) => {
const {id} = req.params

if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error: "No such contact"})
}

const contact = await Contact.findOneAndUpdate({_id: id}, {
  ...req.body
})

if(!contact) {
  return res.status(400).json({error: "No such contact"})
}

res.status(200).json(contact)
}

module.exports = {getContacts, getContact,
   createContact, 
   deleteContact, updateContact}