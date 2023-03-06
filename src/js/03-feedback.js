import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const keyFeedbackForm = 'feedback-form-state';
let formValues = JSON.parse(localStorage.getItem(keyFeedbackForm));

const { email, message } = form.elements;

const saveInLocalStorage = throttle(event => {
  formValues = { email: email.value, message: message.value };
  localStorage.setItem(keyFeedbackForm, JSON.stringify(formValues));
}, 500);

if (formValues) {
  email.value = formValues.email;
  message.value = formValues.message;
}

function submitOn(event) {
  event.preventDefault();
  localStorage.clear();

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(formValues);
  event.currentTarget.reset();
}

form.addEventListener('input', saveInLocalStorage);
form.addEventListener('submit', submitOn);
