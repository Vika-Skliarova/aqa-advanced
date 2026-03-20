// async await
async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

Promise.all([getTodo(), getUser()])
    .then(result => console.log('Promise All result:', result))
    .catch(error => console.log('Promise All error:', error));

Promise.race([getTodo(), getUser()])
    .then(result => console.log('Promise Race result:', result))
    .catch(error => console.log('Promise Race error:', error));