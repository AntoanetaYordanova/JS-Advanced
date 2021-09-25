function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const allTD = [...document.getElementsByTagName('td')];
    let findString = document.getElementById('searchField').value;

    for (let i = 1; i < allTD.length; i++) {
      const td = allTD[i];
      console.log(td);

      if (td.textContent.includes(findString)) {
        td.parentElement.classList.add('select');
      }
    }

    document.getElementById('searchField').value = '';
  }
}
