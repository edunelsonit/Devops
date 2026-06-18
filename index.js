// This runs safely in the user's browser
async function fetchUsers() {
    try {
        // Request data from the backend middleman
        const response = await fetch('http://localhost:3000/api/users');
        const users = await response.json();
        
        console.log(users); 
        // Now you can manipulate the DOM to display 'users' on your webpage
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to load users
fetchUsers();