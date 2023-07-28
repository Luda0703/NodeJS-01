// const contacts = require("./contacts");
const argv = require('yargs').argv;

// console.log(contacts)
const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const allContacts = await contacts.listContacts;
            return console.log(allContacts);
            break;
    }

}

// invokeAction({action: 'list'});
invokeAction(argv);

