const users = [
    {
        name: 'Nick',
        email: 'nickemail@gmail.com',
        age: 25
    },
    {
        name: 'John',
        email: 'johnemail@gmail.com',
        age: 26
    },
    {
        name: 'Dina',
        email: 'dinaemail@gmail.com',
        age: 24
    },
];

for (const user of users) {  
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }

  console.log('-----')
};

for (const { name, email, age } of users) {
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`age: ${age}`);
    console.log('-----');
}