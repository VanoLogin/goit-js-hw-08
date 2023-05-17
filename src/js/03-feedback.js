

// import { throttle } from 'lodash';

let formData = {};
const form = document.querySelector('.feedback-form');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const localSt = localStorage;

form.addEventListener('submit', handleFormSubmit);

form.addEventListener('input', function(event) {
  formData[event.target.name] = event.target.value;
  localSt.setItem('feedback-form-state', JSON.stringify(formData));
});

if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  for (const key in formData) {
    const input = form.querySelector(`[name="${key}"]`);
    input.value = formData[key];
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log({ email: emailInput.value, message: messageInput.value });
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  formData = {};
}
