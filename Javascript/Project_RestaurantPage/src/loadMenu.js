export function loadMenu() {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Menu del Chifa El Dragón Dorado';
    heading.classList.add('main-heading');

    const sections = document.createElement('div');
    sections.classList.add('menu-sections');
    const sectionMainDishes = document.createElement('div');
    sectionMainDishes.classList.add('main-dishes-section');
    sectionMainDishes.innerHTML = `
        <div class='section-header'>
            <h2>Platos Principales</h2>
        </div>

        <div class='info-menu'>
            <h3 class='item-name'>Arroz Chaufa</h3>
            <p class='item-description'>Arroz salteado con pollo, cerdo, huevo y cebolla china. Un clásico de la fusión chino-peruana.</p>
            <h3 class='item-name'>Tallarín Saltado</h3>
            <p class='item-description'>Tallarines salteados con carne de res, cebolla, tomate y ají amarillo. Un plato lleno de sabor y tradición.</p>
            <h3 class='item-name'>Pollo a la Brasa con Salsa de Ajo</h3>
            <p class='item-description'>Jugoso pollo asado al estilo peruano, acompañado de una deliciosa salsa de ajo. Perfecto para compartir.</p>
        </div>
    `;

    const sectionSides = document.createElement('div');
    sectionSides.classList.add('sides-section');
    sectionSides.innerHTML = `
        <div class='section-header'>
            <h2>Acompañamientos</h2>
        </div>

        <div class='info-menu'>
            <h3 class='item-name'>Wantan</h3>
            <p class='item-description'>Crujientes empanaditas rellenas de carne, perfectas para empezar la comida.</p>
            <h3 class='item-name'>Sopa Wantan</h3>
            <p class='item-description'>Sopa reconfortante con wantanes rellenos, ideal para los días fríos.</p>
            <h3 class='item-name'>Ensalada de Repollo</h3>
            <p class='item-description'>Fresca ensalada de repollo con aderezo ligero, un acompañamiento perfecto.</p>
        </div>
    `;

    sections.appendChild(sectionMainDishes);
    sections.appendChild(sectionSides);

    contentDiv.appendChild(heading);
    contentDiv.appendChild(sections);
}