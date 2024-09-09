import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-8xl">Aduh pun :(</h1>
      <p>Sori-sori, ada pereroran duniawi nih.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="underline">Balik ke perhalaman utama itu sih</a>
    </main>
  );
}