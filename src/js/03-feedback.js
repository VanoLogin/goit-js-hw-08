

import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');


const throttledHandleFormInput = throttle(handleFormInput, 500);
form.addEventListener('input', throttledHandleFormInput);
form.addEventListener('submit', handleFormSubmit);


function handleFormInput() {
  const { email, message } = {
    email: emailInput.value,
    message: messageInput.value
  };
  
  localStorage.setItem('KEY_FORM_FEEDBACK', JSON.stringify({ email, message }));
}



function restoreFormData() {
  const { email, message } = JSON.parse(localStorage.getItem('KEY_FORM_FEEDBACK'));

  if (email && message) {
    emailInput.value = email;
    messageInput.value = message;
  }
}

restoreFormData();

function handleFormSubmit(event) {
  event.preventDefault();

  const { email, message } = {
    email: emailInput.value,
    message: messageInput.value
  };

  console.log({ email, message });

  localStorage.removeItem('KEY_FORM_FEEDBACK');
  emailInput.value = '';
  messageInput.value = '';
}
