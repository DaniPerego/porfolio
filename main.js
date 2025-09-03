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
