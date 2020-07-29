// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = (contacts, name, property) => {
  const person = contacts.filter(contact => contact.name === name)[0];

  if (!person) return "Not found";
  const friendName = person.friends[0];
  
  const friendData = contacts.filter(contact => contact.name === friendName)[0];
  if (!friendData) return "Not found";
  if (!friendData[property]) return "Not found";

  return {name: friendName, [property]: friendData[property]};
}

console.log(findFriend(contacts, "Bob", "phone"));