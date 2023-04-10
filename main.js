const emailInputEl = document.querySelector('input#email');
const btnEmailClear = document.querySelector('#email-clear');

btnEmailClear.addEventListener('click', () => {
  emailInputEl.value = '';
});
