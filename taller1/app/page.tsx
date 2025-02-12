export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-white rounded-2xl shadow-lg border border-red-600 w-80 text-center overflow-hidden ">
        <section>
        <figure>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" 
            alt="Paisaje del videojuego Firewatch"
            className="w-full"
          />
        </figure>
        </section>
      <section className="p-4">
        <header>
          <h2 className="text-xl text-gray-800 mt-4">Título del Card</h2>
        </header>

        <article>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </article>

        {/* Sección de tags */}
        <footer className="flex justify-center gap-2 p-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Tag 1</span>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Tag 2</span>
        </footer>
        </section>

      </section>
    </main>
  );
}
