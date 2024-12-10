// script.js
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Print the username and password to the output div
  document.getElementById('output').innerHTML = `
      <h2>Submitted Credentials:</h2>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Password:</strong> ${password}</p>
  `;

  // Optionally, redirect to Facebook login page
  window.location.href = 'https://www.facebook.com/login.php/';
});