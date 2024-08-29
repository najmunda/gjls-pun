import { useState } from 'react';
import { tags_data } from './data.js';

function SideCards() {

  // SORT
  let [isSortAsc, setIsSortAsc] = useState(true);
  function handleSortButton() {
    setIsSortAsc(!isSortAsc);
  }
  let [sortType, setSortType] = useState('sortEpisode');
  function handleSortSelect(option) {
    setSortType(option.target.value);
  }
  
  // TAGS
  let [tags, setTags] = useState(tags_data);
  let [tagsChecked, setTagsChecked] = useState([]);
  function handleTagClick(tagId, tagChecked) {
    if (tagChecked) { //true => false
      const tagClicked = tagsChecked.find(tag => tag.id == tagId);
      setTags([
        tagClicked,
        ...tags
      ]);
      setTagsChecked(tagsChecked.filter(tag => tag.id != tagId))
    } else { //false => true
      const tagClicked = tags.find(tag => tag.id == tagId);
      setTagsChecked([
        tagClicked,
        ...tagsChecked
      ]);
      setTags(tags.filter(tag => tag.id != tagId))
    }
  }
  function handleResetButton() {
    setTags([...tagsChecked, ...tags])
    setTagsChecked([]);
  }

  return (
    <aside className='col-span-1 hidden md:flex flex-col gap-2 sticky top-0'>
      <form className="p-3 flex flex-col gap-4 rounded-xl border border-neutral-300">
        {/* Sort */}
        <div className='flex items-center justify-between'>
          <label htmlFor="sortCard" className='flex items-center gap-2 text-xl font-bold'><span className="material-icons-outlined">sort</span>Urutkan berdasar</label>
          <button type="button" onClick={handleSortButton} className='flex items-center gap-1 px-3 py-1 text-sm bg-neutral-100 rounded-xl border-0 focus:ring-0 active:ring-0'>
            <span className="material-icons-outlined text-base">{isSortAsc ? 'trending_up' : 'trending_down'}</span>
            {isSortAsc ? 'Menaik' : 'Menurun'}
          </button>
        </div>
        <select name="sortCard" id="sortCard" onChange={handleSortSelect} className='px-3 py-1 bg-neutral-100 rounded-xl border-0 focus:ring-0 active:ring-0'>
          <option value="sortEpisode">Episode</option>
          <option value="sortTrend">Trend</option>
          <option value="sortTitle">Title</option>
        </select>
        {/* Tags */}
        <div className='flex items-center justify-between'>
          <p className='flex items-center gap-2 text-xl font-bold'><span className="material-icons-outlined">sell</span>Sortir label</p>
          <button type="button" onClick={handleResetButton} className='flex items-center gap-1 px-3 py-1 text-sm bg-neutral-100 rounded-xl border-0 focus:ring-0 active:ring-0'>
            <span className="material-icons-outlined text-base">delete</span>
            Reset
          </button>
        </div>
        <ul className='flex gap-1 flex-wrap justify-center text-xs'>
          {tagsChecked.map(tag => (
            <li key={tag.id} className='p-2 rounded-xl border border-neutral-300 has-[:checked]:bg-neutral-800 has-[:checked]:text-white'>
              <input onChange={() => {handleTagClick(tag.id, true)}} checked={true} type="checkbox" name={`tag_${tag.id}`} id={`tag_${tag.id}`} className='opacity-0 absolute'/>
              <label htmlFor={`tag_${tag.id}`}>{tag.title}</label>
            </li>
          ))}
          {tags.map(tag => (
            <li key={tag.id} className='p-2 rounded-xl border border-neutral-300 has-[:checked]:bg-neutral-800 has-[:checked]:text-white'>
              <input onChange={() => {handleTagClick(tag.id, false)}} checked={false} type="checkbox" name={`tag_${tag.id}`} id={`tag_${tag.id}`} className='opacity-0 absolute'/>
              <label htmlFor={`tag_${tag.id}`}>{tag.title}</label>
            </li>
          ))}
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
      <ul className='px-2 flex flex-wrap justify-center gap-2'>
        <li className='text-xs hover:underline'>Ini Apa?</li>
        <li className='text-xs hover:underline'>Kontribusi sih!</li>
        <li className='text-xs hover:underline'>Github</li>
        <li className='text-xs'>Dibuat & Dikelola oleh Najmunda | 2024</li>
      </ul>
    </aside>
  )
}

export default SideCards;