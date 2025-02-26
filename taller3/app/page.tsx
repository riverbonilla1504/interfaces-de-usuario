
import { ToggleRight, Palette, Image, Play, Accessibility, ToggleLeft, Loader } from 'lucide-react';
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background p-2">
      <section className="bg-white rounded-2xl shadow-lg w-1/3 p-5">
        <header className="border-b-2 pb-4"> 
          <h1 className="text-xl font-semibold antialiased">Appearance</h1>
          <p className="text-xs font-semibold text-text antialiased">Set or customize your preferences for the system</p>
        </header>
        <section className="flex gap-4 mt-4 border-b-2 pb-4">
            <span className=" font-semibold flex-1">
              <h3 className="text-base">
                Language
              </h3>
              <p className="text-text text-xs">
                select the lenguage of the platform
              </p>
            </span>
          <select name="" id="" className="bg-white rounded-lg border-2 w-1/3 p-2 text-sm font-semibold text-text">
              <option value="">English</option>
              <option value="">asdasd</option>
              <option value="">asdasd</option>
              <option value="">asdasd</option>
          </select>
        </section>
        <section className="flex flex-col mt-4 border-b-2 pb-6">
          <h3 className="text-base font-semibold">Interface theme</h3>
          <p className="text-text text-xs font-semibold">select the theme of the platform</p>
          <section className="flex flex-row gap-12 justify-center mt-4 text-xs text-bold antialiased text-text">
            <span className="flex flex-col items-center">
              <figure className="rounded-lg w-24 h-20 flex overflow-hidden bg-gray-300">
                </figure>
              <p> Auto</p>
             </span>
            <span className="flex flex-col items-center text-purple-300">
              <figure className=" w-24 h-20 flex overflow-hidden bg-gray-300 rounded-lg border-2 border-purple-400">
                </figure>
              <p> Light</p>
            </span>
            <span className="flex flex-col items-center">
              <figure className="rounded-lg w-24 h-20 flex overflow-hidden bg-gray-300">
                </figure>
              <p> Dark</p>
            </span>
          </section>
        </section>
        <section className="mt-4 border-b-2 pb-4 flex">
          <span className=" font-semibold flex-1">
              <h3 className="text-base">
                Accent color
              </h3>
              <p className="text-text text-xs">
                Pick your platforms main color
              </p>
          </span>
          <section className="flex flex-row gap-2 items-center">
            <span className="w-5 h-5 rounded-full bg-blue-500"></span>
            <span className="w-5 h-5 rounded-full bg-red-500"></span>
            <span className="w-5 h-5 rounded-full bg-green-500"></span>
            <span className="w-5 h-5 rounded-full bg-yellow-500"></span>
            <span className="w-5 h-5 rounded-full bg-purple-500"></span>
          </section>
        </section>
        <section className="flex mt-4 border-b-2 pb-4">
          <span className='flex flex-row gap-2 flex-1'>
            <Loader className='text-text'></Loader>
            <h3 className="flex-1 text-base font-semibold">
              Reduce motion
            </h3>
          </span>
          <label className="bg-indigo-500 w-10 h-5 rounded-full flex items-center justify-end p-0.5">
              <span className="bg-white rounded-full h-4 w-4 shadow"></span>
          </label>
        </section>
        <section className="flex mt-4 border-b-2 pb-4">
          <span className='flex flex-row gap-2 flex-1'>
            <Play className='text-text'></Play>
            <h3 className="flex-1 text-base font-semibold">
              Auto play
            </h3>
          </span>
          <label className="bg-indigo-500 w-10 h-5 rounded-full flex items-center justify-end p-0.5">
              <span className="bg-white rounded-full h-4 w-4 shadow"></span>
          </label>
        </section>
        <section className="flex mt-4 border-b-2 pb-4">
          <span className='flex flex-row gap-2 flex-1'>
            <Image className='text-text'></Image>
            <h3 className="flex-1 text-base font-semibold">
              High quality photo
            </h3>
          </span>
          <label className="bg-gray-200 w-10 h-5 rounded-full flex items-center p-0.5">
              <span className="bg-white rounded-full h-4 w-4 shadow"></span>
          </label>
        </section>
        <footer className="mt-4 pb-4 flex">
          <p className=' flex-1 text-text text-bold text-sm items-center justify-center'> Reset to default</p>
          <section className='flex flex-row gap-4'>
            <span className="rounded-lg w-24 h-10 flex overflow-hidden text-base justify-center items-center border-2">
              Cancel
            </span>
            <span className="rounded-lg w-30 h-10 flex overflow-hidden text-base justify-center items-center border-2 bg-indigo-500 text-white ">
              Save preferences
            </span>
          </section>
        </footer>


      </section>
    </main>
  );
}
