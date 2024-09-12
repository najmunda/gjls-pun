import { useEffect, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

function Header({ handleSubmit, handleSideToggle }) {

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

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  function handleSearchToggle() {
    setIsSearchOpen(!isSearchOpen);
  }

  const { q } = useLoaderData();
  useEffect(() => {
    document.getElementById('q').value = q;
  }, [q]);

  return (
    <header className='text-inherit w-full px-8 sm:px-16 py-3 flex justify-between items-center gap-4 bg-inherit border-b border-inherit z-10'>
      <div className={`${isSearchOpen ? 'hidden' : 'flex'} md:flex items-center gap-2`}>
        <span className="material-icons-outlined text-4xl">headphones</span>
        <p className='text-xl font-bold'>GJLS PUN!</p>
      </div>
      <button onClick={handleSearchToggle} className={`${isSearchOpen ? 'flex' : 'hidden'} material-icons-outlined text-2xl md:hidden`}>close</button>
      <Form className={`${isSearchOpen ? 'flex' : 'hidden'} w-full h-full md:w-1/2 px-3 py-1 md:flex justify-end items-center border gap-2`} role='search' onSubmit={handleSubmit}>
        {/* Search for title/word bank */}
        <input name='q' id='q' type="search" defaultValue={q} autoComplete='off' autoCorrect='off' className='w-full p-0 bg-inherit border-0 focus:ring-0 active:ring-0' />
        <span className="material-icons-outlined text-xl">search</span>
      </Form>
      <div className={`${isSearchOpen ? 'hidden' : 'flex'} md:flex items-center gap-4`}>
        <button onClick={handleSearchToggle} className="material-icons-outlined text-2xl md:hidden">search</button>
        <button onClick={handleSideToggle} className="material-icons-outlined text-2xl md:hidden">sort</button>
        <button onClick={handleDarkToggle} className="material-icons-outlined text-2xl">{isDarkMode == 'true' ? 'dark_mode' : 'light_mode'}</button>
      </div>
    </header>
  )
}

export default Header;
