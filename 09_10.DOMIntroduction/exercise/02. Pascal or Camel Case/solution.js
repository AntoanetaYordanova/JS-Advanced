function solve() {
  const actions = {
    'Camel Case': camelCase,
    'Pascal Case': pascalCase,
  };

  let string = document.getElementById('text').value;
  let transform = document.getElementById('naming-convention').value;
  string = string.toLowerCase();
  let newString = '';

  if (isValidAction()) {
    const action = actions[transform];
    action();
  } else {
    document.getElementById('result').textContent = 'Error!';
  }

  function isValidAction() {
    if (transform === 'Camel Case' || transform === 'Pascal Case') {
      return true;
    } else {
      return false;
    }
  }

  function camelCase() {
    const arrFromString = string.split(' ');

    for (let i = 0; i < arrFromString.length; i++) {
      let currentWord = arrFromString[i];

      if (i === 0) {
        newString += currentWord;
        continue;
      }

      let wordArr = currentWord.split('');
      wordArr[0] = wordArr[0].toUpperCase();
      const newWord = wordArr.join('');
      newString += newWord;
    }
    document.getElementById('result').textContent = newString;
  }

  function pascalCase() {
    const arrFromString = string.split(' ');

    for (let i = 0; i < arrFromString.length; i++) {
      let currentWord = arrFromString[i];
      let wordArr = currentWord.split('');
      wordArr[0] = wordArr[0].toUpperCase();
      const newWord = wordArr.join('');
      newString += newWord;
    }
    document.getElementById('result').textContent = newString;
  }
}
