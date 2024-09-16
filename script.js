// script.js

// Select the elements
const userList = document.getElementById('user-list');
const searchInput = document.getElementById('search');

// Fetch JSON data from the local 'data.json' file
fetch('data.json')
  .then(response => response.json()) // Parse the JSON from the response
  .then(data => {
    displayUsers(data); // Display all users initially

    // Add event listener for search input
    searchInput.addEventListener('input', (event) => {
      const searchTerm = event.target.value.toLowerCase(); // Get search term in lowercase
      const filteredUsers = data.filter(user => user.name.toLowerCase().includes(searchTerm)); // Filter users based on the search term
      displayUsers(filteredUsers); // Display the filtered users
    });
  })
  .catch(error => console.error('Error fetching JSON data:', error));

// Function to display the users in the user list container
function displayUsers(users) {
  userList.innerHTML = ''; // Clear existing content
  users.forEach(user => {
    const userItem = document.createElement('div'); // Create a new div for each user
    userItem.innerHTML = `<h3>${user.name}</h3><p>Age: ${user.age}</p><p>Occupation: ${user.occupation}</p>`; // Populate the div with user data
    userList.appendChild(userItem); // Add the user div to the container
  });
}
