<script>
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => { 
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('email').value;
    // Redirect to password.html, passing the username as a query parameter
    window.location.href = `password.html?username=${username}`;
  });
</script>