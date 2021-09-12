const form = document.getElementById('free-trial-form');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.noValidate = true;

form.addEventListener('submit', function (event) {
  // if any inputs are invalid...
  if(!firstName.validity.valid || !lastName.validity.valid || !email.validity.valid || !password.validity.valid) {
    // check each input's validity...
    if (!firstName.validity.valid) {
      // and add 'invalid' class to invalid inputs
      firstName.classList.add('invalid');
    }
    if (!lastName.validity.valid) {
      lastName.classList.add('invalid');
    }
    if (!email.validity.valid) {
      email.classList.add('invalid');
    }
    if (!password.validity.valid) {
      password.classList.add('invalid');
    }
    // then prevent form submission
    event.preventDefault();
  }
});


// event listeners to remove 'invalid' class when user begins typing
firstName.addEventListener('keydown', function () {
  firstName.classList.remove('invalid');
});

lastName.addEventListener('keydown', function () {
  lastName.classList.remove('invalid');
});

email.addEventListener('keydown', function () {
  email.classList.remove('invalid');
});

password.addEventListener('keydown', function () {
  password.classList.remove('invalid');
});
