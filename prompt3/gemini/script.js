// script.js
document.getElementById('credentials-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('store-username').value;
  const password = document.getElementById('store-password').value;
  // Store the credentials in local storage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  alert('Credentials saved!');
});

// Redirect to Facebook login page on form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'https://www.facebook.com/login.php/';
});