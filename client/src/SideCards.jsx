//import { useEffect } from 'react';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';
//import { tags_data } from './data.js';

function SideCards({ handleSubmit, setCardOpenedId }) {

  const { isDesc, sortBy, tags, choosedTags } = useLoaderData();
  //const submit = useSubmit();

  /* SORT
  function handleInput(event) {
    setCardOpenedId(0);
    submit(event.currentTarget.form);
  }*/

  return (
    <aside className='col-span-1 hidden md:flex flex-col gap-2 sticky top-0'>
      <Form id='side-form' className="p-3 flex flex-col gap-4 rounded-xl border">
        {/* Sort */}
        <div className='flex items-center justify-between'>
          <p className='flex items-center gap-2 text-xl font-bold'><span className="material-icons-outlined">sort</span>Urutkan berdasar</p>
          <div className='flex items-center px-3 py-1 rounded-xl border focus:ring-0 active:ring-0'>
            <input type="checkbox" checked={isDesc ? true : false} onChange={handleSubmit} name="isDesc" id="isDesc" className='opacity-0 absolute'/>
            <label htmlFor="isDesc" className='flex items-center gap-1 text-sm'>
              <span className="material-icons-outlined text-base">{isDesc ? 'trending_down' : 'trending_up'}</span>
              {isDesc ? 'Menurun' : 'Menaik'}
            </label>
          </div>
        </div>
        <select name="sortBy" id="sortBy" value={sortBy || ""} onChange={handleSubmit} className='px-3 py-1 rounded-xl border focus:ring-0 active:ring-0'>
          <option value="num">Episode</option>
          {/*<option value="sortTrend">Trend</option>*/}
          <option value="title">Title</option>
        </select>
        {/* Tags*/}
        <div className='flex items-center justify-between'>
          <p className='flex items-center gap-2 text-xl font-bold'><span className="material-icons-outlined">sell</span>Sortir label</p>
          <button type="button" className='flex items-center gap-1 px-3 py-1 text-sm rounded-xl border focus:ring-0 active:ring-0'>
            <span className="material-icons-outlined text-base">delete</span>
            Reset
          </button>
        </div>
        <ul className='flex gap-1 flex-wrap justify-center text-xs'>
          {choosedTags.map((tag) => (
            <li key={tag} className='p-2 rounded-xl border bg-neutral-900 text-neutral-200 dark:bg-white dark:text-neutral-800'>
              <input type="checkbox" onChange={handleSubmit} checked={true} value={tag} name="tags" id={tag} className='opacity-0 absolute'/>
              <label htmlFor={tag}>{tag}</label>
            </li>
          ))}
          {tags.map((tag) => {
            return choosedTags.includes(tag) || (
              <li key={tag} className='p-2 rounded-xl border'>
                <input type="checkbox" onChange={handleSubmit} checked={false} value={tag} name="tags" id={tag} className='opacity-0 absolute'/>
                <label htmlFor={tag}>{tag}</label>
              </li>
            )
          })}
        </ul>
      </Form>
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