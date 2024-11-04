interface Address {
  city: string;
  country: string;
}

interface infoUser {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const mango: infoUser = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const poly: infoUser = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com'
};

console.log(mango, poly);
