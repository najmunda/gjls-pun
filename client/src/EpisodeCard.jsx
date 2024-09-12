import { useLoaderData } from "react-router-dom";

function EpisodeCard({episode, handleDetailButton, cardState}) {
  return cardState == 'open' ? (
    <div className="w-full h-fit p-3 flex flex-col gap-1 relative border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]">
      <div className="flex gap-4 justify-between items-stretch">
        <div>
          <p className="text-xl font-bold">{episode.title}</p>
          <p>Episode {episode.num}</p>
        </div>
        <div className="flex gap-3 items-start">
          <a href={episode.link} target='_blank' rel='noreferrer noopener' className="material-icons-outlined text-2xl">open_in_new</a>
          <button type='button' onClick={() => handleDetailButton(0)} className="material-icons-outlined text-2xl">info</button>
        </div>
      </div>
      <div>
        <p className='text-lg font-medium'>Deskripsi</p>
        <p>{episode.description || 'Deskripsi episode ini belum ditambahkan.'}</p>
      </div>
      <div>
        <p className='text-lg font-medium'><span></span> Abstrak</p>
        <p>{episode.abstract || 'Abstrak episode ini belum ditambahkan.'}</p>
      </div>
      <div>
        <p className='text-lg font-medium'>Kosakata</p>
        {
          episode.wordsBank.length ? (
            <ul className='flex gap-2'>
              {episode.wordsBank.map((words, index) => (
                <li key={index} className='p-2 rounded-xl border'>
                  <p className='text-xs'>{words}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Kosakata episode ini belum ditambahkan.</p>
          )
        }
      </div>
      <div className="flex flex-col gap-1">
        <p className='text-lg font-medium'>Label</p>
        {
          episode.tags.length ? (
            <ul className='flex gap-2'>
              {episode.tags.map((tag, index) => (
                <li key={index} className='p-2 border'>
                  <p className='text-xs'>{tag}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Label episode ini belum ditambahkan.</p>
          )
        }
      </div>
    </div>
  ) : (
    <div className="group w-full h-fit p-3 flex justify-between items-stretch gap-4 relative border shadow-[3px_3px_black] dark:shadow-[3px_3px_white]">
      <div className="flex gap-4 items-center overflow-hidden">
        <p className="w-5 text-center">{episode.num}</p>
        <p className="text-xl font-bold truncate">{episode.title}</p>
      </div>
      <div className="px-3 flex gap-3 items-center absolute end-0 invisible group-hover:visible bg-inherit">
        <a href={episode.link} target='_blank' rel='noreferrer noopener' className="material-icons-outlined text-2xl">open_in_new</a>
        <button type='button' onClick={() => handleDetailButton(episode._id)} className="material-icons-outlined text-2xl">info</button>
      </div>
    </div>
  )
}

export default EpisodeCard;
