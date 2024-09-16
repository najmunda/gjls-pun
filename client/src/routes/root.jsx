import { useState } from 'react';
import { useLoaderData, useSubmit } from 'react-router-dom';
import Header from '../Header.jsx';
import SideCards from '../SideCards.jsx';
import EpisodeCard from '../EpisodeCard.jsx';
import PageNav from '../PageNav.jsx';
import Links from '../Links.jsx';

export async function loader({ request }) {
  //SORT & FILTER
  // Set request
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const isDesc = q ? false : url.searchParams.get('isDesc');
  const sortBy = q ? '' : url.searchParams.get('sortBy');
  const sort = q ? {} : { [sortBy || "num"]: isDesc ? -1 : 1 };
  const choosedTags = url.searchParams.getAll('tags');
  const pageIndex = url.searchParams.get('pageIndex') || 1;
  const req = new Request(`http://localhost:5050/episodes/`, {
    headers: { q: JSON.stringify(q), sort: JSON.stringify(sort), tags: JSON.stringify(choosedTags), pageindex: JSON.stringify(pageIndex)},
  });
  // Send request to get episodes
  const response = await fetch(req);
  const json = await response.json();
  const pages = json.metadata.totalPages;
  const episodes = json.data;

  // Tags
  // Send request to get tags (UI)
  const tags = await (await fetch(`http://localhost:5050/tags/`)).json();

  return { q, isDesc, sortBy, tags, choosedTags, pageIndex, episodes, pages };
}

export default function Root() {

  const { episodes, pages } = useLoaderData();
  const submit = useSubmit();
  
  const [cardOpenedId, setCardOpenedId] = useState(0);
  function handleDetailButton(eps_id) {
    setCardOpenedId(eps_id);
  }

  const [isSideOpen, setIsSideOpen] = useState(false);
  function handleSideToggle() {
    setIsSideOpen(!isSideOpen);
  }
  
  function handleSubmit(event) {
    const formData = new FormData(document.getElementById('side-form'));
    if (document.getElementById('q').value) {
      formData.append('q', document.getElementById('q').value);
      formData.delete('sortBy');
    }
    //formData.append('pageIndex', pages > 1 ? document.getElementById('pageIndex').value : 1);
    submit(formData);
    event.preventDefault();
  }

  return (
    <>
      <Header handleSubmit={handleSubmit} handleSideToggle={handleSideToggle}/>
      <main className='px-8 sm:px-16 flex-1 py-3 w-full grid grid-cols-3 gap-4 relative overflow-y-scroll'>
        <div className='col-span-3 md:col-span-2 flex flex-col gap-4'>
          {episodes.length ?
            episodes.map(episode => (
              <EpisodeCard key={episode._id} episode={episode} handleDetailButton={handleDetailButton} cardState={cardOpenedId == episode._id ? 'open' : ''}/>
            )) : (
              <div className="w-full h-fit py-7 flex flex-col items-center gap-3 relative border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]">
                <p className='text-8xl font-extrabold'>:(</p>
                <p className='text-xl font-bold'>Belum ada episode pada database itu pun.</p>
              </div>
            )
          }
          <PageNav handleSubmit={handleSubmit}/>
        </div>
        <SideCards isSideOpen={isSideOpen} handleSubmit={handleSubmit} setCardOpenedId={setCardOpenedId}/>
      </main>
      <Links className='px-8 sm:px-16 py-3 flex col-span-3 md:hidden border-t border-inherit'/>
    </>
  )
}
