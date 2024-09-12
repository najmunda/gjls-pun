function Links({ className }) {
  return (
    <ul className={className + ' px-2 flex flex-wrap justify-center gap-2 text-xs font-medium'}>
      <li className='hover:underline'>Ini Apa?</li>
      <li className='hover:underline'>Github</li>
      <li className="text-center">Dibuat & Dikelola oleh Najmunda</li>
    </ul>
  )
}

export default Links;