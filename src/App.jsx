import { useState } from 'react';
import { episodes_data, tags_data } from './data.js';
import SideCards from './SideCards.jsx';
import EpisodeCard from './EpisodeCard.jsx';

function App() {

  let [cardOpenedId, setCardOpenedId] = useState(0);
  function handleDetailButton(eps_id) {
    setCardOpenedId(eps_id);
  }

  return (
    <>
      <header className='w-full px-16 py-3 flex justify-between gap-4 sticky top-0 bg-inherit border border-neutral-300 z-10'>
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
      <main className='px-16 py-3 w-full grid grid-cols-3 gap-4'>
        <div className='col-span-2 flex flex-col gap-2'>
          {episodes_data.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} handleDetailButton={handleDetailButton} cardState={cardOpenedId == episode.id ? 'open' : ''}/>
          ))}
        </div>
        <SideCards/>
      </main>
    </>
  )
}

export default App
