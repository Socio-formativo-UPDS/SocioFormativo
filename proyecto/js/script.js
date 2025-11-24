const carrusel = document.querySelector('.carrusel_images');
const btnAnt = document.querySelector('.ant');
const btnSig = document.querySelector('.sig');
const contenedorDots = document.querySelector('.dots');

let indice = 0;
const totalImagenes = carrusel.children.length;

for (let i = 0; i < totalImagenes; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => moverCarrusel(i - indice); 
    contenedorDots.appendChild(dot);
}
const dots = document.querySelectorAll('.dot');

function moverCarrusel(cambio) {
    if (typeof cambio === 'number' && !isNaN(cambio)) {
        indice += cambio;
    }

    if (indice >= totalImagenes) indice = 0;
    if (indice < 0) indice = totalImagenes - 1;

    carrusel.style.transform = `translateX(-${indice * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === indice);
    });
}


setInterval(() => {
    moverCarrusel(1);
}, 10000);

document.querySelector('.carrusel').addEventListener('mouseenter', () => {
    clearInterval(window.carruselAuto); // detiene el automático
});
document.querySelector('.carrusel').addEventListener('mouseleave', () => {
    window.carruselAuto = setInterval(() => moverCarrusel(1), 5000);
});
document.addEventListener("DOMContentLoaded", function() {
    const mapa = document.getElementById("mapa");

    mapa.innerHTML = `
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1885.5658696840935!2d-65.26835385478373!3d-19.05794458095247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1763592442283!5m2!1ses!2sbo"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;
});
