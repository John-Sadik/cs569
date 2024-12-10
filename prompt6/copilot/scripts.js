document.getElementById('stepOneForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.querySelector('input').value;
    document.querySelector('#stepOne').style.display = 'none';
    document.querySelector('#stepTwo').style.display = 'block';
    document.getElementById('enteredUsername').textContent = username;
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.querySelector('#stepTwoForm input[type="password"]');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
    }
});

document.getElementById('stepTwoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
});

document.getElementById('changeLink').addEventListener('click', function() {
    document.querySelector('#stepTwo').style.display = 'none';
    document.querySelector('#stepOne').style.display = 'block';
});

document.getElementById('signUpBtn, #signUpBtn2').addEventListener('click', function() {
    alert('Redirect to sign up page');
});
