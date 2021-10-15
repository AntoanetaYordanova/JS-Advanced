function solve() {
    const main = document.querySelector('main');
    const content = 'Happy New Year';
    const secondContent = 'Merry Christmas';

    let div = createEl('div', undefined, `We wish you `, createEl('strong', 'christmas', secondContent), ` and a `, createEl('strong', 'newYear', content), '!');

    main.appendChild(div);

  function createEl(type, className, ...content) {
    const el = document.createElement(type);

    if (className !== undefined) {
      el.classList.add(className);
    }

    content.forEach((c) => {
      if (typeof c === 'string') {
        el.appendChild(document.createTextNode(c));
      } else {
        el.appendChild(c);
      }
    });
    return el;
  }
}
