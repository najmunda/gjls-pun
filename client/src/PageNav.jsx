import { useLoaderData, useSearchParams } from 'react-router-dom';

function PageNav({ className }) {

  const { pages } = useLoaderData();

  const [ searchParams, setSearchParams ] = useSearchParams();
  const pageIndex = Number(searchParams.get('pageIndex')) || 1;

  function handlePageNav(num) {
    searchParams.set('pageIndex', pageIndex + num);
    setSearchParams(searchParams);
    //setCardOpenedId(0);
  }

  return pages > 1 && pageIndex <= pages ? (
    <div className={className + ' flex justify-center items-center gap-4'}>
      <button type='button' onClick={() => handlePageNav(-1)} className={`${pageIndex == 1 && 'invisible'} material-icons-outlined p-2 border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]`}>keyboard_arrow_left</button>
      <div className="flex items-center p-2 text-xl font-bold border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]">
        <p>{pageIndex} / {pages}</p>
      </div>
      <button type='button' onClick={() => handlePageNav(1)} className={`${pageIndex == pages && 'invisible'} material-icons-outlined p-2 border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]`}>keyboard_arrow_right</button>
    </div>
  ) : (<></>);
}

export default PageNav;