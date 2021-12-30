export default (() => {

    document.addEventListener("mousemove", function(e) {
        move(e.clientX, e.clientY);
    });

    function move(x, y) {
        let wh = window.innerHeight / 2,
            ww = window.innerWidth / 2;

        document.body.style.setProperty('--mouseX', (x - ww) / 20 + "deg");
        document.body.style.setProperty('--mouseY', (y - wh) / 20 + "deg");
    }
})