

// import { throttle } from 'lodash';

// const form = document.querySelector('.feedback-form');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');


// const throttledHandleFormInput = throttle(handleFormInput, 500);
// form.addEventListener('input', throttledHandleFormInput);
// form.addEventListener('submit', handleFormSubmit);


// function handleFormInput() {
//   const { email, message } = {
//     email: emailInput.value,
//     message: messageInput.value
//   };
  
//   localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
// }



// function restoreFormData() {
//   const { email, message } = JSON.parse(localStorage.getItem('feedback-form-state'));

//   if (email && message) {
//     emailInput.value = email;
//     messageInput.value = message;
//   }
// }

// restoreFormData();

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const { email, message } = {
//     email: emailInput.value,
//     message: messageInput.value
//   };

//   console.log({ email, message });

//   localStorage.removeItem('feedback-form-state');
//   emailInput.value = '';
//   messageInput.value = '';
// }
let formData = {};
const form = document.querySelector('.feedback-form');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const localSt = localStorage;

form.addEventListener('submit', (handleFormSubmit));

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
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
localStorage.clear();