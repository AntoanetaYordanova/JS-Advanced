function focused() {
  let inputs = [...document.querySelectorAll("div input")];

  inputs.forEach((input) => {
    input.addEventListener('focus', onFocus);
    input.addEventListener('blur', onBlur)
  });

  function onFocus(ev) {
      ev.target.parentNode.className = 'focus';
  }

  function onBlur(ev) {
    ev.target.parentNode.className = '';
  }
}
