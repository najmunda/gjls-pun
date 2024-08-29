import { tags_data } from './data.js';

function EpisodeCard({episode, handleDetailButton, cardState}) {

  if (cardState == 'open') {
    return (
      <div className="w-full h-fit p-3 flex flex-col gap-1 relative bg-white rounded-xl border border-neutral-300">
        <div className="flex gap-4 justify-between items-stretch">
          <div>
            <p className="text-xl font-bold">{episode.title}</p>
            <p>Episode {episode.id}</p>
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
            episode.tagIds.length ? (
              <ul className='flex gap-2'>
                {episode.wordsBank.map((words, index) => (
                  <li key={index} className='p-2 rounded-xl border border-neutral-300'>
                    <p className='text-xs'>{words}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Kosakata episode ini belum ditambahkan.</p>
            )
          }
        </div>
        <div>
          <p className='text-lg font-medium'>Label</p>
          {
            episode.tagIds.length ? (
              <ul className='flex gap-2'>
                {episode.tagIds.map(tagId => {
                  let tag = tags_data.find(tag => tag.id == tagId);
                  return (
                    <li key={tag.id} className='p-2 rounded-xl border border-neutral-300'>
                      <p className='text-xs'>{tag.title}</p>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p>Label episode ini belum ditambahkan.</p>
            )
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className="group w-full h-fit p-3 flex justify-between items-stretch gap-4 relative bg-white rounded-xl border border-neutral-300">
        <div className="flex gap-4 items-center overflow-hidden">
          <p className="w-5 text-center">{episode.id}</p>
          <p className="text-xl font-bold truncate">{episode.title}</p>
        </div>
        <div className="px-3 flex gap-3 items-center absolute end-0 invisible group-hover:visible bg-inherit">
          <a href={episode.link} target='_blank' rel='noreferrer noopener' className="material-icons-outlined text-2xl">open_in_new</a>
          <button type='button' onClick={() => handleDetailButton(episode.id)} className="material-icons-outlined text-2xl">info</button>
        </div>
      </div>
    )
  }
}

export default EpisodeCard;
