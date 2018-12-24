console.log('destructuring');

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92,
  }
}


const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}`);

const {temp: temperature, city} = person.location;
if (city && temperature){
  console.log(`It's ${temperature} in ${city}`);
}

// challenge

const book = {
  title: 'Ego is our enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  },
}


const {name: publisherName = 'Unknown'} = book.publisher;
console.log(publisherName);

// Array 

const address = []; // [ '1299 Saint Patrick Street', 'Philadelphia', 'Pensylvania', '19147'];
const [, , state = 'NY'] = address;
console.log(`You are in ${state}`);

// Challenge

const item = ['coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [product,,medium] = item;
console.log(`A ${product} is ${medium}`);