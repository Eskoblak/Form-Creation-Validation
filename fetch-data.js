// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container
    const dataContainer = document.getElementById('api-data');

    // Step 4: Use try-catch for fetching
    try {
        const response = await fetch(apiUrl); // fetch API data
        const users = await response.json();  // parse JSON

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 7: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Step 8: Run fetchUserData after the DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
