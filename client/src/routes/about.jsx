import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate()

  useEffect(() => {
    document.getElementById('about-dialog').showModal();
  });

  return (
    <dialog 
      id="about-dialog" 
      className="max-w-[612px] w-4/5 md:w-1/2 p-5 relative flex flex-col gap-2 border bg-inherit shadow-[3px_3px_#172554] dark:shadow-[3px_3px_white] backdrop:opacity-0"
    >
      <button onClick={() => navigate(-1)} className="md:absolute top-5 right-5 material-icons-outlined text-2xl">close</button>
      <div className="flex items-center justify-center gap-2">
        <span className="material-icons-outlined text-5xl">headphones</span>
        <p className="text-center font-bold text-4xl">GJLS PUN!</p>
      </div>
      <p className="text-center">Web ini dipergunakannya (semoga bisa) untuk mencari-mencari podcast gjls favoritmu itu pun. Dirimu bisa pencarian dengan mengetik puncline, diksi, judul, atau kata yang ada dalam ingatan itu sih.</p>
      <p className="text-center">Web <a href="https://github.com/najmunda/gjls-pun" className="underline" target='_blank' rel='noreferrer noopener'>gjls-pun</a> oleh Najmunda, untuk portofolio dan apresiasi Podcast GJLS.</p>
      <p className="text-center">Web dibangun dengan <a href="https://github.com/facebook/react" className="underline" target='_blank' rel='noreferrer noopener'>React</a>, <a href="https://github.com/remix-run/react-router" className="underline" target='_blank' rel='noreferrer noopener'>React Router</a>, dan <a href="https://github.com/tailwindlabs/tailwindcss" className="underline" target='_blank' rel='noreferrer noopener'>Tailwind</a>.</p>
      <p className="text-center">Server dibangun dengan <a href="https://github.com/expressjs/express" className="underline" target='_blank' rel='noreferrer noopener'>Express</a> dan <a href="https://github.com/mongodb/mongo" className="underline" target='_blank' rel='noreferrer noopener'>MongoDB</a>.</p>
      <p className="text-center">Ikon oleh <a href="https://github.com/google/material-design-icons" className="underline" target='_blank' rel='noreferrer noopener'>Google Icons</a>.</p>
    </dialog>
  )
}

export default About;