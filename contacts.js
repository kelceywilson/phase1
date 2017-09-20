const contactStorage = []; // here is where you'll store your contacts

/*
 * addContact
 *
 *  Arguments:
 *    firstName: String (required)
 *    lastName: String (required)
 *    email: String (required)
 *
 *  Example Usage:
 *    addContact("Betty", "Holberton", "betty.holberton@eniac.edu")
 *
 *  Returns:
 *    undefined
 */
const addContact = (firstName, lastName, email) => {
  const newContact = {
    first_name: firstName,
    last_name: lastName,
    email,
  };
  contactStorage.push(newContact);
};

/*
 * addContacts
 *
 *  Arguments:
 *    contacts: Array of contacts (required)
 *
 *  Example Usage:
 *    addContacts([
 *      {
 *        "first_name": "Tanny",
 *        "last_name": "Vibert",
 *        "email": "tvibert0@illinois.edu",
 *      },
 *      {
 *        "first_name": "Tova",
 *        "last_name": "Myall",
 *        "email": "tmyall1@instagram.com",
 *      }
 *    ])
 *
 *  Returns:
 *    undefined
 */
const addContacts = (contacts) => {
  console.log('Loading contact data...');
  contacts.forEach((contact) => {
    // console.log(typeof contact.first_name, typeof contact.last_name, typeof contact.email);
    addContact(contact.first_name, contact.last_name, contact.email);
  });
  console.log('...Finished loading contact data.');
};

/*
 * printContacts
 *
 *  Arguments:
 *    none
 *
 *  Example Usage:
 *    addContacts()
 *
 *  Note: output goes to STDOUT using console.log
 *
 *  Returns:
 *    undefined
 */
const printContacts = () => {
  // sort contacts in ascending order using array#sort
  const sorted = contactStorage.sort((a, b) => {
    if (a.first_name < b.first_name) {
      return -1;
    }
    if (a.first_name > b.first_name) {
      return 1;
    }
    return 0;
  });

  // Calculate the lengths of longest name & email
  // in order to create appropriate header length
  let namesLength = 0;
  let emailsLength = 0;
  sorted.forEach((contact) => {
    const nameLength = contact.first_name.length + contact.last_name.length;
    const emailLength = contact.email.length;
    if (nameLength > namesLength) {
      namesLength = nameLength + 1;
    }
    if (emailLength > emailsLength) {
      emailsLength = emailLength;
    }
  });

  // log header
  const header = `|-${'-'.repeat(namesLength)}-+-${'-'.repeat(emailsLength)}-|`;
  console.log('All Contacts:');
  console.log(header);
  console.log(`| Full Name ${' '.repeat(namesLength - 9)}| Email Address${' '.repeat(emailsLength - 12)}|`);
  console.log(header);
  // loop through contacts and log each none
  sorted.forEach((contact) => {
    // calculate how many spaces to put after each full name and email address
    const nameSpaces = namesLength - contact.first_name.length - contact.last_name.length;
    const emailSpaces = emailsLength - contact.email.length;
    console.log(`| ${contact.first_name} ${contact.last_name}${' '.repeat(nameSpaces)}| ${contact.email} ${' '.repeat(emailSpaces)}|`);
  });
  console.log(header);
};


// //////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
// //////////////////////////////////////////////////////////

addContacts([
  {
    first_name: 'Tanny',
    last_name: 'Vibert',
    email: 'tvibert0@illinois.edu',
  },
  {
    first_name: 'Tova',
    last_name: 'Myall',
    email: 'tmyall1@instagram.com',
  },
  {
    first_name: 'Engracia',
    last_name: 'Folger',
    email: 'efolger2@epa.gov',
  },
  {
    first_name: 'Conroy',
    last_name: 'Honsch',
    email: 'chonsch3@sohu.com',
  },
  {
    first_name: 'Virgina',
    last_name: 'Cankett',
    email: 'vcankett4@washington.edu',
  },
  {
    first_name: 'Mateo',
    last_name: 'Da Costa',
    email: 'mdacosta5@about.com',
  },
  {
    first_name: 'Ambrose',
    last_name: 'Scullard',
    email: 'ascullard6@timesonline.co.uk',
  },
  {
    first_name: 'Shaylah',
    last_name: 'Fairney',
    email: 'sfairney7@stumbleupon.com',
  },
  {
    first_name: 'Pier',
    last_name: 'Waine',
    email: 'pwaine8@unc.edu',
  },
  {
    first_name: 'Karita',
    last_name: 'Bough',
    email: 'kbough9@angelfire.com',
  },
  {
    first_name: 'Marguerite',
    last_name: 'Lafayette',
    email: 'mlafayettea@bravesites.com',
  },
  {
    first_name: 'Northrop',
    last_name: 'Bauchop',
    email: 'nbauchopb@pagesperso-orange.fr',
  },
  {
    first_name: 'Devon',
    last_name: 'Bocking',
    email: 'dbockingc@comcast.net',
  },
  {
    first_name: 'Willdon',
    last_name: 'Hedley',
    email: 'whedleyd@purevolume.com',
  },
  {
    first_name: 'Charil',
    last_name: 'Clegg',
    email: 'cclegge@weibo.com',
  },
  {
    first_name: 'Nessi',
    last_name: 'Bywaters',
    email: 'nbywatersf@shop-pro.jp',
  },
  {
    first_name: 'Mercy',
    last_name: 'Browncey',
    email: 'mbrownceyg@yelp.com',
  },
  {
    first_name: 'Didi',
    last_name: 'Grose',
    email: 'dgroseh@google.com.hk',
  },
  {
    first_name: 'Niccolo',
    last_name: 'Spruce',
    email: 'nsprucei@wordpress.com',
  },
  {
    first_name: 'Winston',
    last_name: 'Hixley',
    email: 'whixleyj@homestead.com',
  },
]);

printContacts();
