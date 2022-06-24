import throttle from 'lodash.throttle';

//const
const STORAGE_KEY = 'feedback-form-state';

//refs
const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textArea = document.querySelector('[name="message"]');
const btn = document.querySelector('[type="submit"]');

//liseners
form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInputForm, 500));

pushToinputs();

const dataUser = { [input.name]: input.value, [textArea.name]: textArea.value };
localStorage.setItem(STORAGE_KEY, JSON.stringify(dataUser));

function onSubmit(event) {
  event.preventDefault();
  if (input.value === '' || textArea.value === '') {
    return alert('Будь ласка, заповніть всі поля!');
  }
  console.log(dataUser);
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputForm(evt) {
  dataUser[input.name] = input.value;
  dataUser[textArea.name] = textArea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataUser));
}

function pushToinputs() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  const currentDatsUser = JSON.parse(savedMsg);
  if (!currentDatsUser) {
    return;
  }
  input.value = currentDatsUser.email;
  textArea.value = currentDatsUser.message;
}
