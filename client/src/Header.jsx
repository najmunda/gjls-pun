import { useEffect, useState } from 'react';
import { Form, useLoaderData, useSearchParams } from 'react-router-dom';

function Header({ handleSideToggle }) {

  let [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('dark'));
  function handleDarkToggle() {
    document.getElementsByTagName("html")[0].classList.toggle('dark');
    if (isDarkMode == 'true') {
      setIsDarkMode('false');
      localStorage.setItem('dark', 'false');
    } else {
      setIsDarkMode('true');
      localStorage.setItem('dark', 'true');
    }
  }

  const [ searchParams, setSearchParams ] = useSearchParams();
  const { url } = useLoaderData();
  const q = url.searchParams.get('q') || '';

  const [isSearchOpen, setIsSearchOpen] = useState(q ? true : false);
  function handleSearchToggle() {
    setIsSearchOpen(!isSearchOpen);
  }

  useEffect(() => {
    if (q) {
      setIsSearchOpen(true);
    }
    document.getElementById('q').value = q;
  }, [q]);

  return (
    <header className='text-inherit w-full px-10 sm:px-20 py-3 flex justify-between items-center gap-4 bg-inherit border-b border-inherit z-10 rounded-t-2xl'>
      <div className={`${isSearchOpen ? 'hidden' : 'flex'} md:flex items-center gap-2`}>
        <span className="material-icons-outlined text-4xl">headphones</span>
        <p className='text-xl font-bold hidden min-[350px]:block'>GJLS PUN!</p>
      </div>
      <Form className={`${isSearchOpen ? 'flex' : 'hidden'} w-full h-full md:w-1/2 px-3 py-1 md:flex justify-end items-center border gap-2 focus-within:outline-1 focus-within:outline focus-within:outline-inherit`} role='search'>
        <button
          type='reset'
          onClick={() => {
            handleSearchToggle();
            setSearchParams({});
          }}
          className={`material-icons-outlined text-2xl md:hidden`}>
            close
        </button>
        {/* Search for title/word bank */}
        <input name='q' id='q' type="search" defaultValue={q} autoFocus autoComplete='off' autoCorrect='off' className='w-full font-semibold p-0 bg-inherit border-0 focus:ring-0 active:ring-0' />
        <button type='submit' className="material-icons-outlined text-xl px-1">search</button>
      </Form>
      <div className='flex items-center gap-3'>
        <button onClick={handleSearchToggle} className={`${isSearchOpen ? 'hidden' : 'block'} material-icons-outlined px-1 text-2xl md:hidden`}>search</button>
        <button onClick={handleSideToggle} className="material-icons-outlined px-1 text-2xl md:hidden">sort</button>
        {/*<button className={`${isSearchOpen ? 'hidden' : 'block'} material-icons-outlined px-1 text-2xl md:block`}>playlist_add</button>*/}
        <button onClick={handleDarkToggle} className='material-icons-outlined px-1 text-2xl'>{isDarkMode == 'true' ? 'dark_mode' : 'light_mode'}</button>
      </div>
    </header>
  )
}

export default Header;
