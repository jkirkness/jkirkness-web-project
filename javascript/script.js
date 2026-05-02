const userForm = document.getElementById('userForm');
const favoriteInput = document.getElementById('favoriteInput');
const greetingDisplay = document.getElementById('greetingDisplay');

userForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const favorite = favoriteInput.value;

    greetingDisplay.textContent = `"${favorite}" is HORRIBLE, terrible choice..`;

    favoriteInput.value = '';
});