const fs = require('fs').promises;
const path = require("path");


//  Розкоментуй і запиши значення
  // const contactsPath = path.resolve("db", "contacts.json");
  const contactsPath = path.join(__dirname, "contacts.json");

  // TODO: задокументувати кожну функцію
const listContacts = async() => {
    // const data = await fs.readFile(contactsPath);
    const data = await fs.readFile(contactsPath);
    console.log(data)
  return JSON.parse(data); 
  }
 
  
  
  const getContactById = async(contactId) => {
     // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
  }

  module.exports = { listContacts };
 