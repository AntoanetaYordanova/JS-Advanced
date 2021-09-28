function validate() {
  document.getElementById('submit').addEventListener('click', getData);
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const isCompanyCheckbox = document.getElementById('company');
  const companyNumberInput = document.getElementById('companyNumber');
  const divValid = document.getElementById('valid');

  isCompanyCheckbox.addEventListener('change', () => {
    if (isCompanyCheckbox.checked) {
      document.getElementById('companyInfo').style.display = '';
    } else {
      document.getElementById('companyInfo').style.display = 'none';
    }
  });

  function getData(ev) {
    ev.preventDefault();

    if (isCompanyCheckbox.checked) {
      validateUsername();
        validateEmail();
        validatePassword(); 
        validateCompany();

      if (
        validateUsername() &&
        validateEmail() &&
        validatePassword() &&
        validateCompany()
      ) {
        divValid.style.display = '';
      } else {
          divValid.style.display = 'none';
      }
    } else {
      validateUsername();
      validateEmail();
      validatePassword();
      if (validateUsername() && validateEmail() && validatePassword()) {
        divValid.style.display = '';
      } else {
        divValid.style.display = 'none';

      }
    }
  }

  function validateUsername() {
    const username = usernameInput.value;
    let isValid = false;

    if (/^[a-zA-Z0-9]{3,20}$/g.test(username)) {
      isValid = true;
      applyBorderStyle(isValid, usernameInput);
      return isValid;
    } else {
      isValid = false;
      applyBorderStyle(isValid, usernameInput);
      return isValid;
    }
  }

  function validateEmail() {
    const email = emailInput.value;
    let isValid = false;

    if (/^.*@.*\..*$/g.test(email)) {
      isValid = true;
      applyBorderStyle(isValid, emailInput);
      return isValid;
    } else {
      isValid = false;
      applyBorderStyle(isValid, emailInput);
      return isValid;
    }
  }

  function validatePassword() {
    const pass = passwordInput.value;
    const confirmPass = confirmPasswordInput.value;
    const passPattern = /^\w{5,15}$/;
    let isValid = false;
    console.log(passPattern.test(pass));
    console.log(passPattern.test(confirmPass));
    console.log(pass === confirmPass);
    if (
      passPattern.test(pass) &&
      passPattern.test(confirmPass) &&
      pass === confirmPass
    ) {
      isValid = true;

      applyBorderStyle(isValid, passwordInput);
      applyBorderStyle(isValid, confirmPasswordInput);
      return isValid;
    } else {
      
      isValid = false;

      applyBorderStyle(isValid, passwordInput);
      applyBorderStyle(isValid, confirmPasswordInput);
      return isValid;
    }
  }

  function validateCompany() {
    const companyNumber = Number(companyNumberInput.value);
    let isValid = false;

    if (companyNumber >= 1000 && companyNumber <= 9999) {
      isValid = true;
      applyBorderStyle(isValid, companyNumberInput);
      return isValid;
    } else {
      isValid = false;
      applyBorderStyle(isValid, companyNumberInput);
      return isValid;
    }
  }

  function applyBorderStyle(isValid, element) {
    if (isValid) {
      element.style.setProperty('border', 'none');
    } else {
      element.style.setProperty('border-color', 'red');
    }
  }
}
