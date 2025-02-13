export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-white rounded-xl shadow-2xl shadow-gray-500 ring-2 ring-red-400 w-80 text-center overflow-hidden border-solid ">
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
          <h2 className="text-xl text-gray-800 text-left m-2 font-extrabold">Red Heaven</h2>
        </header>

        <article>
          <p className="text-gray-500 m-2 mb-8 text-left grid-flow-row">
            Lorem ipsum dolor sit amet, consectetur adipiasdfsafsafas safafsaf asfasfas asfaf   afsafsaf asf scing elit.
          </p>
        </article>

        {/* Sección de tags */}
        <footer className=" flex gap-2 ml-2">
          <span className="bg-red-400 text-white-800 text-xs px-3 py-1 rounded-full font-bold">#tailwind</span>
          <span className="bg-red-400 text-white-800 text-xs px-3 py-1 rounded-full font-bold">#frontendeverything</span>
        </footer>
        </section>

      </section>
    </main>
  );
}
