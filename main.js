const emailInputEl = document.querySelector('input#email');
const btnEmailClear = document.querySelector('#email-clear');

const pwInputEl = document.querySelector('input#password');
const btnPwToggle = document.querySelector('#password-toggle');

btnEmailClear.addEventListener('click', () => {
  emailInputEl.value = '';
});

btnPwToggle.addEventListener('click', () => {
  if (pwInputEl.type === 'password') {
    pwInputEl.type = 'text';
    btnPwToggle.textContent = 'visibility';
  } else {
    pwInputEl.type = 'password';
    btnPwToggle.textContent = 'visibility_off';
  }
});
