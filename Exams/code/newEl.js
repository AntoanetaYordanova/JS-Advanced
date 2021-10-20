function newEl(type,className, ...content) {
    const el = document.createElement(type);

    if(className !== undefined) {
        el.classList.add(className);
    }

        content.forEach(c => {
            if(typeof c === 'string') {
                el.appendChild(document.createTextNode(c));
            } else {
                el.appendChild(c);
            }
        });
    return el;
}