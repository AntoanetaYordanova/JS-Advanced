function generateReport() {
    const checkboxes = Array.from(document.querySelectorAll('thead tr th input'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    let printArr = [];

    for(let i = 0; i < rows.length; i++) {
        let currentRow = Array.from(rows[i].children);
        let obj = {};

        for(let i = 0; i < currentRow.length; i++) {

            if(checkboxes[i].checked) {
                const property = checkboxes[i].name;
                const value = currentRow[i].textContent;
                obj[property] = value;
            }
        }

        printArr.push(obj); 
    }

    let jsonString = JSON.stringify(printArr);

    document.getElementById('output').value = jsonString;
}