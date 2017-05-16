function checkPhone() {
  const phone = document.getElementById('phone')
  if (phone.classList.contains('error')) {
    phone.classList.remove('error');
    document.getElementById('phoneText').classList.remove('red');
    document.getElementById('phoneTextHidden').style.display = 'none';
  }
  let phoneNumber = ''
  phone.value.split('').forEach(e => {if (typeof Number(e) === 'number') phoneNumber += Number(e)});
  if (phoneNumber.length === 10) return true;
  phone.classList.add('error');
  document.getElementById('phoneText').classList.add('red');
  document.getElementById('phoneTextHidden').style.display = 'inline';
  return false;
}

function submitSurvey() {
  let goodToSubmit = true;
  const checkingPhone = checkPhone();
  if (checkingPhone) {
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('submitSuccess').style.display = 'block';
  }
};

function quitEverything() {
  document.getElementById('survey').style.display = 'none';
}