import { Link } from "react-router-dom";

function Links({ className }) {
  return (
    <ul className={className + ' px-2 flex flex-wrap justify-center gap-2 text-xs font-medium'}>
      <li className='hover:underline'><Link to={'about'}>Ini Apa?</Link></li>
      <li className='hover:underline'><a href="https://github.com/najmunda/gjls-pun" target='_blank' rel='noreferrer noopener'>Github</a></li>
      <li className="text-center">Dibuat & Dikelola oleh Najmunda</li>
    </ul>
  )
}

export default Links;