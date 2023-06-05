import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const router = useRouter();

  return (
    <>
      <Image src={image} alt={title} />
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <button onClick={(event) => router.push("/art-pieces")}>Back</button>
    </>
  );
}
