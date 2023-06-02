import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data }) {
  const { imageSource, artist } = pickRandomArtPiece(data);

  return <Spotlight image={imageSource} artist={artist} />;
}

function pickRandomArtPiece(data) {
  const randomNumber = Math.floor(Math.random() * data.length);

  return data[randomNumber];
}
