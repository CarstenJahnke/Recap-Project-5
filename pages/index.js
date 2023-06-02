import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((response) => response.json());

// function fetcher(url) {
//   return fetch(url).then(handleResponse(response));
// }
// function handleResponse(response) {
//   return response.json();
// }

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>ERORR: Failed to load.</div>;
  if (isLoading) return <div>Loading...</div>;

  const { imageSource, artist } = pickRandomArtPiece(data);
  return (
    <>
      <Spotlight image={imageSource} artist={artist} />
      <ArtPieces pieces={data} />
    </>
  );
}

function pickRandomArtPiece(data) {
  const randomNumber = Math.floor(Math.random() * data.length);

  return data[randomNumber];
}
