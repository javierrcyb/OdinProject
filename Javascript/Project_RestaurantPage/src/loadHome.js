import chaufaimage from './assets/images/arrozChaufa.jpg';

export function loadHome() {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Chifa El Dragón Dorado';
    heading.classList.add('main-heading');

    const paragraph = document.createElement('p');
    paragraph.textContent =
        'Bienvenidos a El Dragón Dorado, el corazón de la fusión chino-peruana. ' +
        'Nuestro chifa combina lo mejor de la tradición cantonesa con los sabores vibrantes del Perú. ' +
        'Ven y disfruta de platos clásicos como arroz chaufa, tallarín saltado y wantán frito, en un ambiente acogedor y familiar.';

    const image = document.createElement('img');
    image.src = chaufaimage;
    image.alt = 'Arroz chaufa peruano';
    image.style.width = '300px';
    image.style.borderRadius = '10px';
    image.style.marginTop = '20px';

    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(image);
}
