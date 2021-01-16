const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function () {
  fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value
    })
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
});