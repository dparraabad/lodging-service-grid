document.addEventListener('DOMContentLoaded', () => {

    // Header Image Sequence
    const headerImage = document.querySelector('.header');
    let counter = 0;
    let time = 0;
    const images = ['arriba2.jpg', 'arriba.jpg'];

    setInterval(() => {
        headerImage.style.backgroundPositionX = '-' + time + 'px';

        if (time > 25) {
            time = 0;
            headerImage.style.backgroundImage = "url(../img/" + images[counter] + ")";

            if (counter === images.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
        }

        time++;

    }, 100);


    // Float Button Actions
    const floatButton = document.querySelector('.float-button');

    floatButton, addEventListener('click', e => {
        e.preventDefault();

        const footer = document.querySelector('#footer');

        if (footer.classList.contains('active')) {
            footer.classList.remove('active');
            floatButton.classList.remove('active');
            floatButton.innerHTML = 'Idioma y Moneda';

        } else {
            footer.classList.add('active');
            floatButton.classList.add('active');
            floatButton.innerHTML = 'Cerrar';
        }
    });

});