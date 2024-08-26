import { episodes_data, tags_data } from './data.js';
import SideCards from './SideCards.jsx';

function App() {
  let episodes = episodes_data.map(episode => (
    <div key={episode.id} className="group w-full h-fit p-3 flex justify-between items-center gap-4 relative bg-white rounded-xl border border-neutral-300">
      <div className="flex gap-4 items-center overflow-hidden">
        <p className="w-5 text-center">{episode.id}</p>
        <p className="text-xl font-bold truncate">{episode.title}</p>
      </div>
      <div className="px-3 flex gap-4 items-center absolute end-0 invisible group-hover:visible bg-inherit">
        <a href={episode.link} target='_blank' rel='noreferrer noopener' className="material-icons-outlined text-2xl">open_in_new</a>
        <a href="#" target='_blank' rel='noreferrer noopener' className="material-icons-outlined text-2xl">info</a>
        <a href="#" target='_blank' rel='noreferrer noopener' className="material-icons-outlined text-2xl">edit_note</a>
      </div>
    </div>
  ));
  return (
    <>
      <header className='w-full px-16 py-3 flex justify-between gap-4 sticky top-0 border border-neutral-300'>
        <div className='flex items-center gap-2'>
          <span className="material-icons-outlined text-4xl">headphones</span>
          <p className='text-xl font-bold'>GJLS PUN!</p>
        </div>
        <form className='w-1/2 px-3 flex justify-end items-center gap-4 bg-neutral-100 rounded-xl' action="">
          {/* Search for title/word bank */}
          <input className='w-full bg-transparent border-0 focus:ring-0 active:ring-0' type="text" />
          <span className="material-icons-outlined text-xl">search</span>
        </form>
        <div className='flex items-center gap-4'>
          <span className="material-icons-outlined text-2xl md:hidden">sort</span>
          <span className="material-icons-outlined text-2xl">light_mode</span>
        </div>
      </header>
      <main className='flex-1 px-16 py-3 flex justify-between gap-4'>
        <div className='w-3/4 flex flex-col gap-2'>
          {episodes}
        </div>
        <SideCards/>
      </main>
    </>
  )
}

export default App
