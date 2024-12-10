// Get the username from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Display the username on the login page
document.getElementById('display-username').textContent = username;

// Handle the login button click
const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('sign-up-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;

    // TO DO: Add authentication logic here
    // For now, just redirect to another website
    window.location.href = 'https://www.example.com';
});

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // TO DO: Add sign-up logic here
    // For now, just redirect to another website
    window.location.href = 'https://www.example.com';
});

// Handle the change link click
const changeLink = document.getElementById('change-link');
changeLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Redirect back to the first page to change the username
    window.location.href = 'index.html';
});