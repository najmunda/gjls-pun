//import { useEffect } from 'react';
import { Form, useLoaderData, useSearchParams, useSubmit } from 'react-router-dom';
import Links from './Links';
//import { tags_data } from './data.js';

function SideCards({ isSideOpen }) {

  const submit = useSubmit();

  const { tags } = useLoaderData();

  const [ searchParams, setSearchParams ] = useSearchParams();
  const q = searchParams.get('q') || '';
  const isDesc = searchParams.get('isDesc') || '';
  const sortBy = searchParams.get('sortBy') || 'num';
  const choosedTags = searchParams.getAll('tags') || [];
  
  function handleTagResetButton() {
    searchParams.delete('tags');
    searchParams.delete('pageIndex');
    setSearchParams(searchParams);
  }

  function handleSideForm(event) {
    const formData = new FormData(event.currentTarget);
    if (q) {
      formData.append('q', q);
    }
    submit(formData);
    event.preventDefault();
  }

  return (
    <aside className={`${isSideOpen ? 'flex' : 'hidden'} absolute top-3 sm:px-16 px-8 w-screen md:w-auto md:px-0 md:col-span-1 md:flex flex-col gap-4 self-start md:sticky md:top-0`}>
      <Form onChange={handleSideForm} id='side-form' className="p-3 flex flex-col gap-4 border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]">
        {/* Sort */}
        {q ? <></> : (
          <>
            <div className='flex items-center justify-between'>
              <p className='flex items-center gap-2 text-xl font-bold'><span className="material-icons-outlined">sort</span>Urut berdasar</p>
              <div className='flex items-center px-3 py-1 border focus:ring-0 active:ring-0'>
                <input type="checkbox" checked={isDesc == 'on' ? true : false} name="isDesc" id="isDesc" readOnly className='opacity-0 absolute'/>
                <label htmlFor="isDesc" className='flex items-center gap-1 text-sm'>
                  <span className="material-icons-outlined text-base">{isDesc ? 'trending_down' : 'trending_up'}</span>
                  <span className='md:max-lg:hidden'>{isDesc ? 'Menurun' : 'Menaik'}</span>
                </label>
              </div>
            </div>
            <select name="sortBy" id="sortBy" value={sortBy || ""} className='px-3 py-1 border focus:ring-0 active:ring-0' readOnly>
              <option value="num">Episode</option>
              <option value="title">Judul</option>
              {/*<option value="sortTrend">Trend</option>*/}
            </select>
          </>
        )}
        {/* Tags*/}
        <div className='flex items-center justify-between'>
          <p className='flex items-center gap-2 text-xl font-bold'><span className="material-icons-outlined">sell</span>Sortir label</p>
          <button type="button" onClick={handleTagResetButton} className='flex items-center gap-1 px-3 py-1 text-sm border focus:ring-0 active:ring-0'>
            <span className="material-icons-outlined text-base">delete</span>
            <span className='md:max-lg:hidden'>Reset</span>
          </button>
        </div>
        <ul className='flex gap-1 flex-wrap justify-center text-xs'>
          {choosedTags.map((tag) => (
            <li key={tag} className='p-2 border bg-neutral-900 text-neutral-200 dark:bg-white dark:text-neutral-800'>
              <input type="checkbox" checked={true} value={tag} name="tags" id={tag} className='opacity-0 absolute' readOnly/>
              <label htmlFor={tag}>{tag}</label>
            </li>
          ))}
          {tags.map((tag) => {
            return choosedTags.includes(tag) || (
              <li key={tag} className='p-2 border'>
                <input type="checkbox" checked={false} value={tag} name="tags" id={tag} className='opacity-0 absolute' readOnly/>
                <label htmlFor={tag}>{tag}</label>
              </li>
            )
          })}
        </ul>
      </Form>
      <Links className='hidden md:flex'/>
    </aside>
  )
}

export default SideCards;