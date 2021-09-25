function attachGradientEvents() {
    let element = document.getElementById('gradient');
    element.addEventListener('mousemove', onMove);

    function onMove(event){
        const offsetX = event.pageX - event.target.offsetLeft;
        const percent = Math.round(offsetX / event.target.clientWidth * 100);
        document.getElementById('result').textContent = `${percent}%`;
    }
}