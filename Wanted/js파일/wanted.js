const signin_close_button = document.getElementById('signin_close_button');
const signup_button = document.getElementById('signup_button');
const signinmal_background = document.getElementById('signinmal_background');

signup_button.addEventListener('click', function () {
  signinmal_background.style.display = 'block';
});

signin_close_button.addEventListener('click', function () {
  signinmal_background.style.display = 'none';
});

const userid = document.querySelector('#email');
userid.addEventListener('change', (e) => {
  // html 의 onchange="validEmail(this)"와 동일
  validEmail(e.target);
});
function validEmail(obj) {
  console.log(obj);
  if (validEmailCheck(obj) == false) {
    alert('올바른 이메일 주소를 입력해주세요.');
    obj.value = '';
    obj.focus();
    return false;
  }
}
function validEmailCheck(obj) {
  var pattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return obj.value.match(pattern) != null;
}
