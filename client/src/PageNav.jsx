import { useLoaderData, useSearchParams } from 'react-router-dom';

function PageNav({ className }) {

  const { pages } = useLoaderData();

  const [ searchParams, setSearchParams ] = useSearchParams();
  const { url } = useLoaderData();
  const pageIndex = Number(url.searchParams.get('pageIndex')) || 1;

  function handlePageNav(num) {
    searchParams.set('pageIndex', pageIndex + num);
    setSearchParams(searchParams);
  }

  return pages > 1 && pageIndex <= pages ? (
    <div className={className + ' flex justify-center items-center gap-4'}>
      {pageIndex != 1 && (<button type='button' onClick={() => handlePageNav(-1)} className='material-icons-outlined p-2 border shadow-[3px_3px_black] dark:shadow-[3px_3px_white] focus:outline-1 focus:outline focus:outline-inherit focus:font-bold'>keyboard_arrow_left</button>)}
      <div className="flex items-center p-2 text-xl font-bold border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]">
        <p>{pageIndex} / {pages}</p>
      </div>
      {pageIndex != pages && (<button type='button' onClick={() => handlePageNav(1)} className='material-icons-outlined p-2 border shadow-[3px_3px_black] dark:shadow-[3px_3px_white] focus:outline-1 focus:outline focus:outline-inherit focus:font-bold'>keyboard_arrow_right</button>)}
    </div>
  ) : (<></>);
}

export default PageNav;