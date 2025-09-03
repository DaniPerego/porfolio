
export default function Home() {
  return (
    <main className="min-h-screen w-full text-white flex flex-col items-center">
      {/* Presentación */}
      <section className="w-full max-w-3xl flex flex-col items-center text-center py-20 px-4 gap-4">
  <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500">Hola, soy Daniel Pérego</h1>
        <p className="text-lg sm:text-2xl text-gray-300">Desarrollador web apasionado por crear experiencias digitales modernas y funcionales.</p>
        <div className="flex gap-4 mt-4">
          <a href="#proyectos" className="px-6 py-2 rounded bg-orange-500 hover:bg-orange-600 transition font-semibold">Ver proyectos</a>
          <a href="#contacto" className="px-6 py-2 rounded border border-orange-500 hover:bg-orange-900 transition font-semibold">Contacto</a>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="w-full max-w-5xl py-16 px-4">
  <h2 className="text-3xl font-bold mb-8 text-orange-400">Proyectos Destacados</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Proyecto 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col gap-2 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">Proyecto Uno</h3>
            <p className="text-gray-400">Descripción breve del proyecto. Tecnologías usadas, objetivo y resultado.</p>
            <a href="#" className="text-orange-400 hover:underline">Ver más</a>
          </div>
          {/* Proyecto 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col gap-2 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">Proyecto Dos</h3>
            <p className="text-gray-400">Descripción breve del proyecto. Tecnologías usadas, objetivo y resultado.</p>
            <a href="#" className="text-orange-400 hover:underline">Ver más</a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobremi" className="w-full max-w-3xl py-16 px-4 flex flex-col items-center text-center">
  <h2 className="text-3xl font-bold mb-4 text-orange-400">Sobre mí</h2>
        <p className="text-gray-300 max-w-xl">Soy un desarrollador web con experiencia en tecnologías modernas como React, Next.js y Tailwind CSS. Me apasiona el diseño, la animación y la creación de productos digitales que generen impacto.</p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="w-full max-w-2xl py-16 px-4 flex flex-col items-center text-center">
  <h2 className="text-3xl font-bold mb-4 text-orange-400">Contacto</h2>
        <p className="text-gray-300 mb-4">¿Te gustaría trabajar conmigo o tienes alguna consulta? ¡Escríbeme!</p>
        <form className="flex flex-col gap-4 w-full max-w-md">
          <input type="text" placeholder="Nombre" className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none" />
          <input type="email" placeholder="Email" className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none" />
          <textarea placeholder="Mensaje" className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none" rows={4} />
          <button type="submit" className="px-6 py-2 rounded bg-orange-500 hover:bg-orange-600 transition font-semibold">Enviar</button>
        </form>
      </section>
    </main>
  );
}
