const person = {
	firstName: 'Name',
	lastName: 'Lastname',
	age: 20,
};

person.email = 'testemail@gmail.com';

delete person.age;

console.log(person);
