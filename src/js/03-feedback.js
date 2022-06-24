import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STOREGE_KEY = 'feedback-form-state';
let msgObj = {};

feedbackForm.addEventListener('submit', hendlerSubmit);
feedbackForm.addEventListener('input', throttle(hendlerInput, 500));

fieldValue();

function hendlerSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STOREGE_KEY);
  msgObj = {};
}
function hendlerInput(evt) {
  msgObj[evt.target.name] = evt.target.value;
  localStorage.setItem(STOREGE_KEY, JSON.stringify(msgObj));
}

function fieldValue() {
  if (localStorage.getItem(STOREGE_KEY)) {
    const obj = JSON.parse(localStorage.getItem(STOREGE_KEY));
    feedbackForm.elements.email.value = obj[feedbackForm.elements.email.name];
    msgObj[feedbackForm.elements.email.name] =
      obj[feedbackForm.elements.email.name];
    feedbackForm.elements.message.value =
      obj[feedbackForm.elements.message.name];
    msgObj[feedbackForm.elements.message.name] =
      obj[feedbackForm.elements.message.name];
  }
}
