const db = require('./handleFile.js');
const { log } = require('./log.js');
const CONST = require('./constants.js');

function listContacts() {
  return db.readData();
}

function getContactById(id = null) {
  if (id === null) return 'No id specified';

  const contacts = db.readData();
  const contact = contacts.filter(contact => String(contact.id) === String(id));

  if (contact.length === 0) return 'No contact found with this id';
  return contact;
}

function removeContact(id = null) {
  if (id === null) return 'No id specified';

  const contacts = db.readData();
  const newContactsList = contacts.filter(contact => String(contact.id) !== String(id));

  if (contacts.length === newContactsList.length) return 'Contact with this id not found';

  db.writeData(CONST.defaultPath, newContactsList);
  return true;
}

function addContact(contact = null) {
  if (!contact) return 'No data passed';

  const contacts = db.readData();
  contacts.push(contact);

  db.writeData(CONST.defaultPath, contacts);
  return true;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
