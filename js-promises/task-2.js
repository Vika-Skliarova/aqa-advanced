// Promise then() catch()
function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => console.log('Error:', error));
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => console.log('Error:', error));
}

// Promise.all
Promise.all([getTodo(), getUser()])
    .then(([todo, user]) => {
        console.log('Promise All:', todo, user);
    }
);

// Promise.race
Promise.race([getTodo(), getUser()])
    .then(result => {
        console.log('Promise Race:', result);
    }
);