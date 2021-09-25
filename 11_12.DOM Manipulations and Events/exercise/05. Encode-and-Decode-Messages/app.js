function encodeAndDecodeMessages() {
  let inputTextarea = document.querySelector('div textarea');
  let outputTextarea = document.querySelector('div:nth-child(2) textarea');

  document
    .querySelector('div')
    .querySelector('button')
    .addEventListener('click', codeMessage);
  document
    .querySelector('div:nth-child(2)')
    .querySelector('button')
    .addEventListener('click', decodeMessage);

  function codeMessage() {
    let message = inputTextarea.value;
    let array = message.split('');
    let codedMessage = array
      .map((char) => {
        return char.charCodeAt() + 1;
      })
      .map((num) => {
        return String.fromCharCode(num);
      });
    console.log(codedMessage);
    outputTextarea.value = codedMessage.join('');
    inputTextarea.value = '';
  }

  function decodeMessage() {
    let codedMessage = outputTextarea.value;

    let decodedMessage = codedMessage
      .split('')
      .map((char) => {
        return char.charCodeAt() - 1;
      })
      .map((char) => {
        return String.fromCharCode(char);
      })
      .join('');

    outputTextarea.value = decodedMessage;
  }
}
