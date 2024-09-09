import { useEffect, useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

function Header({ handleSubmit }) {

  const { q } = useLoaderData();
  useEffect(() => {
    document.getElementById('q').value = q;
  }, [q]);

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

  return (
    <header className='text-inherit w-full px-16 py-3 flex justify-between gap-4 sticky top-0 bg-inherit border-b border-inherit z-10'>
      <div className='flex items-center gap-2'>
        <span className="material-icons-outlined text-4xl">headphones</span>
        <p className='text-xl font-bold'>GJLS PUN!</p>
      </div>
      <Form className='w-1/2 px-3 flex justify-end items-center border gap-2 rounded-xl' role='search' onSubmit={handleSubmit}>
        {/* Search for title/word bank 
        {searchText && <button type='button' onClick={() => setSearchText('')} className="material-icons-outlined text-xl">close</button>}*/}
        <input name='q' id='q' type="search" defaultValue={q} className='w-full p-0 bg-inherit border-0 focus:ring-0 active:ring-0' />
        <span className="material-icons-outlined text-xl">search</span>
      </Form>
      <div className='flex items-center gap-4'>
        <span className="material-icons-outlined text-2xl md:hidden">sort</span>
        <button onClick={handleDarkToggle} className="material-icons-outlined text-2xl">{isDarkMode == 'true' ? 'dark_mode' : 'light_mode'}</button>
      </div>
    </header>
  )
}

export default Header;
