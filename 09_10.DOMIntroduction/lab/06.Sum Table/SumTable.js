function sumTable() {
    const allSums = document.querySelectorAll('table tbody tr td:nth-child(2)');
    let sum = 0;
    [...allSums].forEach(e => sum += Number(e.textContent));
    console.log(sum);
    document.getElementById('sum').textContent = sum;
}