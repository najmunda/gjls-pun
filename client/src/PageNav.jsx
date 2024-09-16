import { Form, useLoaderData } from 'react-router-dom';

function PageNav({ className, handleSubmit }) {
  
  const { pageIndex, pages } = useLoaderData();

  function handlePageNav(num) {
    document.getElementById('pageIndex').value = Number.parseInt(document.getElementById('pageIndex').value) + num;
  }

  return pages > 1 ? (
    <Form onSubmit={handleSubmit} className={className + ' flex justify-center items-center gap-4'}>
      <button type='submit' onClick={() => handlePageNav(-1)} className={`${pageIndex == 1 && 'invisible'} material-icons-outlined p-2 border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]`}>keyboard_arrow_left</button>
      <div className="flex items-center p-2 text-xl font-bold border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]">
        <input type="text" inputMode='numeric' pattern='[0-9]*' name="pageIndex" id="pageIndex" defaultValue={pageIndex} className='hidden' />
        <p>{pageIndex} / {pages}</p>
      </div>
      <button type='submit' onClick={() => handlePageNav(1)} className={`${pageIndex == pages && 'invisible'} material-icons-outlined p-2 border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]`}>keyboard_arrow_right</button>
    </Form>
  ) : (<></>);
}

export default PageNav;