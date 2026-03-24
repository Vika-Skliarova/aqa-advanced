// Promise then() catch()
function getTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.catch((error) => console.log('Error:', error));
}

function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.catch((error) => console.log('Error:', error));
}

Promise.all([getTodo(), getUser()])
	.then((result) => console.log('Promise All result:', result))
	.catch((error) => console.log('Race error:', error));

Promise.race([getTodo(), getUser()])
	.then((result) => console.log('Promise Race result:', result))
	.catch((error) => console.log('Race error:', error));
