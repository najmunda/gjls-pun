import { useState } from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { useLineStatus } from '../utils.js';
import Header from '../Header.jsx';
import SideCards from '../SideCards.jsx';
import EpisodeCard from '../EpisodeCard.jsx';
import PageNav from '../PageNav.jsx';
import Links from '../Links.jsx';

export async function loader({ request }) {
  // Set request
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  const isDesc = url.searchParams.get('isDesc') || false;
  const sortBy = url.searchParams.get('sortBy') || 'num';
  const choosedTags = url.searchParams.getAll('tags');
  const pageIndex = url.searchParams.get('pageIndex') || 1;
  const req = new Request(`http://localhost:5050/episodes/`, {
    headers: { 
      q: JSON.stringify(q),
      isdesc: JSON.stringify(isDesc),
      sortby: JSON.stringify(sortBy),
      tags: JSON.stringify(choosedTags),
      pageindex: JSON.stringify(pageIndex)},
  });
  try {
    // Send request to get episodes
    const response = await fetch(req);
    const json = await response.json();
    const pages = json.metadata.totalPages;
    const episodes = json.data;
    const tags = json.tags;
    return { url, tags, episodes, pages };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default function Root() {

  const { episodes, url } = useLoaderData();
  const [ prevEpisodes, setPrevEpisodes] = useState(episodes);

  const q = url.searchParams.get('q') || '';;
  
  const [cardOpenedId, setCardOpenedId] = useState(0);
  function handleDetailButton(e, eps_id) {
    setCardOpenedId(eps_id);
    e.stopPropagation();
  }

  if (episodes !== prevEpisodes) {
    setPrevEpisodes(episodes);
    setCardOpenedId(0);
  }

  const [isSideOpen, setIsSideOpen] = useState(false);
  function handleSideToggle() {
    setIsSideOpen(!isSideOpen);
  }

  const navigation = useNavigation();
  const isOnline = useLineStatus();

  return (
    <>
      <Header handleSideToggle={handleSideToggle} setCardOpenedId={setCardOpenedId}/>
      <main className='px-10 sm:px-20 flex-1 py-3 w-full grid grid-cols-3 gap-3 relative overflow-y-auto rounded-b-2xl'>
        <div className='col-span-3 md:col-span-2 flex flex-col items-center gap-2'>
          {!isOnline ? (
            <div className="w-full h-full py-7 flex flex-col justify-center items-center gap-3">
              <span className="material-icons-outlined text-8xl">wifi_off</span>
              <p className='text-xl text-center font-bold'>Dirimu pribadi tidak konek ke internet duniawi deh.</p>
            </div>
          ) : navigation.state === 'loading' ?
            <div className="w-full h-full flex flex-col justify-center items-center">
              <span className="material-icons-outlined text-4xl text-center animate-spin">refresh</span>
            </div>
          : episodes.length ? 
            (
              <>
                {
                  episodes.map((episode, index) => (
                    <EpisodeCard key={episode._id} index={index} episode={episode} handleDetailButton={handleDetailButton} cardState={cardOpenedId == episode._id ? 'open' : ''}/>
                  ))
                }
                <PageNav episodesLength={episodes.length}/>
              </>
            ) : (
              <div className="w-full h-full py-7 flex flex-col justify-center items-center gap-3">
                {q ? <>
                  <span className="material-icons-outlined text-8xl">search_off</span>
                  <p className='text-xl text-center font-bold'>Episode yang kamu cari tidak ditemukannya itu pun.</p>
                </> : <>
                  <span className="material-icons-outlined text-8xl">layers_clear</span>
                  <p className='text-xl text-center font-bold'>Belum ada episode pada database itu pun.</p>
                </>}
              </div>
            )
          }
        </div>
        <SideCards isSideOpen={isSideOpen}/>
      </main>
      <Links className='px-10 sm:px-20 py-3 flex col-span-3 rounded-b-2xl md:rounded-none md:hidden border-t border-inherit'/>
      <Outlet/>
    </>
  )
}
