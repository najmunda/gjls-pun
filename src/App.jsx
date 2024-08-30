import { useState } from 'react';
import { episodes_data, tags_data } from './data.js';
import Header from './Header.jsx';
import SideCards from './SideCards.jsx';
import EpisodeCard from './EpisodeCard.jsx';

function App() {

  let [cardOpenedId, setCardOpenedId] = useState(0);
  function handleDetailButton(eps_id) {
    setCardOpenedId(eps_id);
  }

  return (
    <>
      <Header/>
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
