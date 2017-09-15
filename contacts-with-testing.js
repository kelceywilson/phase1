let contactStorage = [] // here is where you'll store your contacts

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
const addContact = function(firstName, lastName, email) {
// check if the firstName, lastName & email addresses are strings
  if (typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string"){
    // if either of those arguments are NOT strings, the function should throw an error
    return {
        "first": firstName,
        "last": lastName,
        "email": email
    };
  } else {
    let newContact = {
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    };
    contactStorage.push(newContact);
  }
}

// Testing addContact with console.assert()
console.assert(addContact("Kelcey", "Wilson", "kelceywilson@gmail.com") === undefined, 'contact not added');
console.assert(typeof addContact === 'function', 'addContact is not a function');

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
const addContacts = function(contacts) {
  console.log("Loading contact data...");
  // addContacts function should catch errors thrown by addContact function, and continue processing the remaining contacts.
  let contactErrors = [];
  for (i = 0; i < contacts.length; i++){
    let addReturn = addContact(contacts[i].first_name, contacts[i].last_name, contacts[i].email);
    if (addReturn !== undefined){
      contactErrors.push(addReturn);
    }
  }
  console.log("...Finished loading contact data.");
  // The function should maintain the list of contacts that failed to be loaded, and should print a warning to the console about the failed imports
  if (contactErrors.length > 0){
    console.log(`Could not import ${contactErrors.length} contacts.`);
    for (i = 0; i < contactErrors.length; i++){
      console.log("First: %s, Last: %s, Email: %s", contactErrors[i].first, contactErrors[i].last, contactErrors[i].email);
    }
  }
}

// Testing addContacts with console.assert()
console.assert(addContacts({"first_name":"Kelcey", "last_name": "Wilson", "email": "kelceywilson@gmail.com"}) === undefined, 'contacts not added');
console.assert(typeof addContacts === 'function', 'addContact is not a function');

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
const printContacts = function() {
  // sort contacts in ascending order using array#sort
  let sorted = contactStorage.sort(function(a, b){
    if (a.first_name < b.first_name){
      return -1;
    }
    if (a.first_name > b.first_name){
      return 1;
    }
    return 0;
  });
  // log header
  console.log("All Contacts:");
  console.log("|----------------------+--------------------------------|");
  console.log("| Full Name            | Email Address                  |");
  console.log("|----------------------+--------------------------------|");
  // loop through contacts and log each none
  for (i = 0; i < sorted.length; i++){
    //calculate how many spaces to put after each full name and email address
    let nameSpaces = 20 - sorted[i].first_name.length - sorted[i].last_name.length;
    let emailSpaces = 31 - sorted[i].email.length;
    console.log("| %s %s%s | %s%s |", sorted[i].first_name, sorted[i].last_name, Array(nameSpaces).join(" "), sorted[i].email, Array(emailSpaces).join(" "));
  }
  console.log("|----------------------+--------------------------------|");
}


////////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
////////////////////////////////////////////////////////////

addContacts([
  {
    "first_name": "Tanny",
    "last_name": "Vibert",
    "email": "tvibert0@illinois.edu",
  },
  {
    "first_name": 55,
    "last_name": "Myall",
    "email": "tmyall1@instagram.com",
  },
  {
    "first_name": "Engracia",
    "last_name": "Folger",
    "email": "efolger2@epa.gov",
  },
  {
    "first_name": "Conroy",
    "last_name": "Honsch",
    "email": "chonsch3@sohu.com",
  },
  {
    "first_name": "Virgina",
    "last_name": "Cankett",
    "email": true,
  },
  {
    "first_name": "Mateo",
    "last_name": "Da Costa",
    "email": "mdacosta5@about.com",
  },
  {
    "first_name": "Ambrose",
    "last_name": "Scullard",
    "email": "ascullard6@timesonline.co.uk",
  },
  {
    "first_name": "Shaylah",
    "last_name": "Fairney",
    "email": "sfairney7@stumbleupon.com",
  },
  {
    "first_name": "Pier",
    "last_name": "Waine",
    "email": "pwaine8@unc.edu",
  },
  {
    "first_name": "Karita",
    "last_name": "Bough",
    "email": "kbough9@angelfire.com",
  },
  {
    "first_name": "Marguerite",
    "last_name": "Lafayette",
    "email": "mlafayettea@bravesites.com",
  },
  {
    "first_name": "Northrop",
    "last_name": "Bauchop",
    "email": "nbauchopb@pagesperso-orange.fr",
  },
  {
    "first_name": "Devon",
    "last_name": "Bocking",
    "email": "dbockingc@comcast.net",
  },
  {
    "first_name": "Willdon",
    "last_name": 22,
    "email": "whedleyd@purevolume.com",
  },
  {
    "first_name": "Charil",
    "last_name": "Clegg",
    "email": "cclegge@weibo.com",
  },
  {
    "first_name": "Nessi",
    "last_name": "Bywaters",
    "email": "nbywatersf@shop-pro.jp",
  },
  {
    "first_name": "Mercy",
    "last_name": "Browncey",
    "email": "mbrownceyg@yelp.com",
  },
  {
    "first_name": "Didi",
    "last_name": "Grose",
    "email": "dgroseh@google.com.hk",
  },
  {
    "first_name": "Niccolo",
    "last_name": "Spruce",
    "email": "nsprucei@wordpress.com",
  },
  {
    "first_name": "Winston",
    "last_name": "Hixley",
    "email": "whixleyj@homestead.com",
  },
])

printContacts()
