// Ejemplo de proyectos (puedes reemplazar por datos reales o cargar dinámicamente)
const proyectos = [
  {
    titulo: 'Landing Page para Startup',
    descripcion: 'Diseño y desarrollo de landing page moderna y responsiva.',
    url: '#'
  },
  {
    titulo: 'E-commerce personalizado',
    descripcion: 'Tienda online con integración de pagos y panel de administración.',
    url: '#'
  },
  {
    titulo: 'Web institucional',
    descripcion: 'Sitio web corporativo para empresa de servicios.',
    url: '#'
  }
];

const contenedor = document.getElementById('proyectos');
if (contenedor) {
  proyectos.forEach(proy => {
    const card = document.createElement('div');
    card.className = 'proyecto-card';
    card.innerHTML = `
      <h3>${proy.titulo}</h3>
      <p>${proy.descripcion}</p>
      <a href="${proy.url}" target="_blank">Ver proyecto</a>
    `;
    contenedor.appendChild(card);
  });
}

// Puedes agregar aquí componentes React para secciones interactivas si lo deseas

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navOverlay = document.querySelector('.nav-overlay');

  navToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
    navToggle.classList.toggle('active');
    navOverlay.style.opacity = navList.classList.contains('show') ? '1' : '0';
    navOverlay.style.pointerEvents = navList.classList.contains('show') ? 'all' : 'none';
    // Cambia el icono hamburguesa a X
    navToggle.innerHTML = navList.classList.contains('show') ? '&times;' : '&#9776;';
  });

  navOverlay.addEventListener('click', function() {
    navList.classList.remove('show');
    navToggle.classList.remove('active');
    navOverlay.style.opacity = '0';
    navOverlay.style.pointerEvents = 'none';
    navToggle.innerHTML = '&#9776;';
  });
});
