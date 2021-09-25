
  let btn = document.getElementById("button");
  btn.addEventListener("click", move);

  function move() {
    let element = document.querySelector("ul").children[2];
    document.querySelectorAll("ul")[1].append(element);
  }

  document.getElementById('first-list').addEventListener('click', (ev => {
    console.log(ev);
  }))