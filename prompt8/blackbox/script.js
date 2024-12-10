const signInForm = document.getElementById('sign-in-form');
const nextBtn = document.getElementById('next-btn');
const signUpBtn = document.getElementById('sign-up-btn');

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;

    // Redirect to the login page with the username as a query parameter
    window.location.href = `login.html?username=${encodeURIComponent(username)}`;
});

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // TO DO: Add sign-up logic here
    // For now, just redirect to another website
    window.location.href = 'https://www.example.com';
});