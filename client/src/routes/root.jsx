import { useState } from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
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
  // Send request to get episodes
  const response = await fetch(req);
  const json = await response.json();
  const pages = json.metadata.totalPages;
  const episodes = json.data;
  const tags = json.tags;

  return { url, tags, episodes, pages };
}

export default function Root() {

  const { episodes } = useLoaderData();
  const [ prevEpisodes, setPrevEpisodes] = useState(episodes);
  
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

  return (
    <>
      <Header handleSideToggle={handleSideToggle} setCardOpenedId={setCardOpenedId}/>
      <main className='px-8 sm:px-16 flex-1 py-3 w-full grid grid-cols-3 gap-3 relative overflow-y-scroll'>
        <div className='col-span-3 md:col-span-2 flex flex-col items-center gap-2'>
          {navigation.state === 'loading' ?
            <span className="material-icons-outlined text-4xl text-center animate-spin">refresh</span>
          : episodes.length ? 
            (
              <>
                {
                  episodes.map(episode => (
                    <EpisodeCard key={episode._id} episode={episode} handleDetailButton={handleDetailButton} cardState={cardOpenedId == episode._id ? 'open' : ''}/>
                  ))
                }
                <PageNav/>
              </>
            ) : (
              <div className="w-full h-fit py-7 flex flex-col items-center gap-3 relative border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]">
                <p className='text-8xl font-extrabold'>:(</p>
                <p className='text-xl text-center font-bold'>Belum ada episode pada database itu pun.</p>
              </div>
            )   
          }
        </div>
        <SideCards isSideOpen={isSideOpen}/>
      </main>
      <Links className='px-8 sm:px-16 py-3 flex col-span-3 md:hidden border-t border-inherit'/>
      <Outlet/>
    </>
  )
}
