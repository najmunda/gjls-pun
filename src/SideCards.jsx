import { useState } from 'react';
import { tags_data } from './data.js';

function SideCards() {
  let [isSortAsc, setIsSortAsc] = useState(true);
  function handleSortButton() {
    setIsSortAsc(!isSortAsc);
  }
  let [sortType, setSortType] = useState('episode');
  let tags = tags_data.map((tag) => (
    <li key={tag.id} className='p-2 rounded-xl border border-neutral-300 has-[:checked]:bg-neutral-800 has-[:checked]:text-white'>
      <input type="checkbox" name={`tag_${tag.id}`} id={`tag_${tag.id}`} className='opacity-0 absolute'/>
      <label htmlFor={`tag_${tag.id}`}>{tag.title}</label>
    </li>
  ));
  return (
    <aside className='w-1/4 hidden md:flex flex-col gap-2'>
      <form className="p-3 flex flex-col gap-4 rounded-xl border border-neutral-300">
        {/* Sort */}
        <div className='flex items-center justify-between'>
          <label htmlFor="sortCard" className='flex items-center gap-2 text-xl font-bold'><span className="material-icons-outlined">sort</span>Sort by</label>
          <button type="button" onClick={handleSortButton} className='flex items-center gap-1 px-3 py-1 text-sm bg-neutral-100 rounded-xl border-0 focus:ring-0 active:ring-0'>
            <span className="material-icons-outlined text-base">{isSortAsc ? 'trending_up' : 'trending_down'}</span>
            {isSortAsc ? 'Menaik' : 'Menurun'}
          </button>
        </div>
        <select name="sortCard" id="sortCard" className='px-3 py-1 bg-neutral-100 rounded-xl border-0 focus:ring-0 active:ring-0'>
          <option value="sortEpisode" selected="selected">Episode</option>
          <option value="sortTrend">Trend</option>
          <option value="sortTitle">Title</option>
        </select>
        {/* Tags */}
        <div className='flex items-center justify-between'>
          <p className='flex items-center gap-2 text-xl font-bold'><span className="material-icons-outlined">sell</span>Include tags</p>
          <button type="button" className='flex items-center gap-1 px-3 py-1 text-sm bg-neutral-100 rounded-xl border-0 focus:ring-0 active:ring-0'>
            <span className="material-icons-outlined text-base">delete</span>
            Reset
          </button>
        </div>
        <ul className='flex gap-1 flex-wrap text-sm'>
          {tags}
        </ul>
      </form>
      <a href='https://tokopedia.com/gjlsmerch' target='_blank' className="p-3 flex flex-col gap-4 text-center text-white bg-green-600 rounded-xl border border-neutral-300">
        Tokopedia
      </a>
      <a href='https://instagram.com/gjlsmerch' target='_blank' className="p-3 flex flex-col gap-4 text-center rounded-xl border border-neutral-300" style={{background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}}>
        Instagram
      </a>
      <a href='https://tiktok.com/@gjlsentertainment' target='_blank' className="p-3 flex flex-col gap-4 text-center text-white bg-black rounded-xl border border-neutral-300">
        Tiktok
      </a>
    </aside>
  )
}

export default SideCards;