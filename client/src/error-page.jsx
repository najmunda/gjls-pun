import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-8xl text-center">Aduh pun :(</h1>
      <p className="text-center">Sori-sori, ada pereroran duniawi nih.</p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="underline text-center">Balik ke perhalaman utama itu sih</a>
    </main>
  );
}