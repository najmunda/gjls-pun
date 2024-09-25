function EpisodeCard({episode, handleDetailButton, cardState}) {

  function handleEpisodeAnchor(event) {
    event.stopPropagation();
  }

  return cardState == 'open' ? (
    <div tabIndex={0} role="button" onKeyUp={((e) => e.key === 'Enter' && handleDetailButton(e, 0))} onClick={(e) => handleDetailButton(e, 0)} className="w-full h-fit p-3 flex flex-col gap-1 relative border border-x-8 cursor-pointer">
      <div className="flex gap-4 justify-between items-stretch">
        <div>
          <p className="text-xl font-bold leading-none">{episode.title}</p>
          <p>Episode {episode.num}</p>
        </div>
        <div className="flex gap-3 items-start">
          <a onClick={handleEpisodeAnchor} href={episode.link} target='_blank' rel='noreferrer noopener' className="material-icons-outlined text-2xl leading-none">open_in_new</a>
          <button type='button' onClick={(e) => handleDetailButton(e, 0)} className="material-icons-outlined text-2xl leading-none">info</button>
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
    <div tabIndex={0} role="button" onKeyUp={((e) => e.key === 'Enter' && handleDetailButton(e, episode._id))} onClick={(e) => handleDetailButton(e, episode._id)} className="group w-full h-fit p-3 flex justify-between items-center gap-3 relative border-y-2 border-x-8 cursor-pointer">
      <div className="flex gap-3 items-center overflow-hidden">
        <p className="w-fit px-1 text-center border rounded">{episode.num}</p>
        <p className="text-xl text-center font-bold truncate leading-none">{episode.title}</p>
      </div>
      <div role="toolbar" className="flex opacity-0 absolute px-3 my-auto right-0 gap-3 items-center group-hover:opacity-100 group-focus:opacity-100 focus-within:opacity-100 bg-inherit">
        <a onClick={handleEpisodeAnchor} href={episode.link} target='_blank' rel='noreferrer noopener' className="material-icons-outlined text-2xl leading-none">open_in_new</a>
        <button type='button' onClick={(e) => handleDetailButton(e, episode._id)} className="material-icons-outlined text-2xl leading-none">info</button>
      </div>
    </div>
  )
}

export default EpisodeCard;
