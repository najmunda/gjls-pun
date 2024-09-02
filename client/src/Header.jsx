import { useState } from 'react';

function Header() {

  const [searchText, setSearchText] = useState('');
  function handleSearchBar(e) {
    setSearchText(e.target.value);
  }

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
      <form className='w-1/2 px-3 flex justify-end items-center border gap-2 rounded-xl' action="">
        {/* Search for title/word bank */}
        {searchText && <button type='button' onClick={() => setSearchText('')} className="material-icons-outlined text-xl">close</button>}
        <input className='w-full p-0 bg-inherit border-0 focus:ring-0 active:ring-0' value={searchText} onChange={handleSearchBar} name='search-bar' type="text" />
        <span className="material-icons-outlined text-xl">search</span>
      </form>
      <div className='flex items-center gap-4'>
        <span className="material-icons-outlined text-2xl md:hidden">sort</span>
        <button onClick={handleDarkToggle} className="material-icons-outlined text-2xl">{isDarkMode == 'true' ? 'dark_mode' : 'light_mode'}</button>
      </div>
    </header>
  )
}

export default Header;
