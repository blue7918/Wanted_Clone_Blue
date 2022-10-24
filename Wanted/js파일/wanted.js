let signin_close_button1 = document.getElementById('signin_close_button1');
let signin_close_button2 = document.getElementById('signin_close_button2');
let signup_button = document.getElementById('signup_button');
let signinmal_first = document.getElementById('signinmal_first');
let signinmal_second = document.getElementById('signinmal_second');
let signinmal_background = document.getElementById('signinmal_background');
let write_right_address = document.getElementById('write_right_address');
const userid = document.querySelector('#email');

signup_button.addEventListener('click', function () {
  signinmal_background.style.display = 'block';
});

signin_close_button1.addEventListener('click', function () {
  signinmal_background.style.display = 'none';
});
input_panel_button.addEventListener('click', function () {
  if (validEmail(email) == 2) {
    signinmal_first.style.display = 'none';
    signinmal_second.style.display = 'block';
  }
});
signin_close_button2.addEventListener('click', function () {
  signinmal_second.style.display = 'none';
  signinmal_first.style.display = 'block';
  signinmal_background.style.display = 'none';
});

function validEmail(obj) {
  console.log(obj);
  if (validEmailCheck(obj) == false) {
    write_right_address.style.display = 'block';
    setTimeout(function () {
      write_right_address.style.display = 'none';
    }, 1500);
    obj.value = '';
    obj.focus();
    return false;
  } else {
    return 2;
  }
}
function validEmailCheck(obj) {
  var pattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return obj.value.match(pattern) != null;
}

checkboxes = document.getElementsByName('check');
function is_all_checked(checknum) {
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = checknum.checked;
  }
}
document.getElementsByName('check_all').onclick = function () {};
//카테고리 내 checkbox클릭시 c() 실행
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].onclick = c;
}
//카테고리 하나라도 안눌리면 전체체크박스 해제
function c() {
  var j = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == false) {
      checkbox_all.checked = false;
    } else {
      j++;
    }
    if (j == checkboxes.length) {
      checkbox_all.checked = true;
    }
  }
}
