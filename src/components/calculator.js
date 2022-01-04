import calculatorData from "../../assets/js/data"

export default (() => {

    [].forEach.call(document.querySelectorAll("form.has-calculator"), function(form) {
        form.addEventListener('change', function() {

            let product = form.querySelector('input[name="product"]');

            if (product.type !== 'hidden') {
                product = form.querySelector('input[name="product"]:checked');
            }
            let length = form.querySelector('input[name="length"]:checked');
            let interval = form.querySelector('input[name="interval"]:checked');
            let sum = 0;

            try {
                sum += calculatorData.products[product.value][length.value][interval.value];
                const animateBlock = form.querySelector('.catalog__price');
                const out = form.querySelector('.calculator-price');
                const outOld = form.querySelector('.calculator-price-old');

                const animationName = 'pulse';
                animateBlock.classList.add('animated', 'faster', animationName);
                animateBlock.addEventListener('animationend', function() { animateBlock.classList.remove('animated', 'faster', animationName) });

                let numberFrom = Number(typeof out.dataset.from === 'undefined' ? 0 : out.dataset.from);
                let numberTo = Number(sum);
                const time = {
                    start: performance.now(),
                    duration: 600
                };
                const tick = function(now) {
                    const progress = Math.min((now - time.start) / time.duration, 1);
                    const easing = Math.pow(progress - 1, 5) + 1;
                    const value = numberFrom + (numberTo - numberFrom) * easing;
                    outOld.textContent = value.toFixed();
                    out.textContent = value.toFixed();
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        out.dataset.from = numberTo.toFixed();
                        outOld.textContent = Number(numberTo * 1.27).toFixed();
                    }
                };
                requestAnimationFrame(tick);
            } catch (e) { console.error(e); }
        });
        form.dispatchEvent(new Event('change'));
    });
})