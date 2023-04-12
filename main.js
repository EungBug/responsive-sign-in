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

// error 모달
const btnSignIn = document.querySelector('.btn.sign-in');
const modal = document.querySelector('.modal-wrap');
const modalMessage = modal.querySelector('h4.message');
const btnConfirm = modal.querySelector('.btn');

let isShowModal = false;

btnSignIn.addEventListener('click', btnSignInHandler);
btnConfirm.addEventListener('click', () => {
  modal.classList.remove('show');
  isShowModal = false;
});

function btnSignInHandler() {
  if (isShowModal) return;

  modalMessage.classList.remove('success');

  if (emailInputEl.value.trim() === 'test@gmail.com' && pwInputEl.value.trim() === '1234') {
    modalMessage.textContent = '로그인 성공!';
    modalMessage.classList.add('success');
  } else if (!emailInputEl.value.trim()) {
    modalMessage.textContent = '이메일을 입력해주세요!';
  } else if (!pwInputEl.value.trim()) {
    modalMessage.textContent = '비밀번호를 입력해주세요!';
  } else {
    modalMessage.textContent = '이메일 또는 비밀번호가 올바르지 않습니다.';
  }
  modal.classList.add('show');
  isShowModal = true;
}
