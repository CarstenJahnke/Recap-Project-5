import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((response) => response.json());

// function fetcher(url) {
//   return fetch(url).then(handleResponse(response));
// }
// function handleResponse(response) {
//   return response.json();
// }

export default function HomePage() {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>ERORR: Failed to load.</div>;
  if (!data) return <div>Loading...</div>;
  return <ArtPieces pieces={data} />;
}
