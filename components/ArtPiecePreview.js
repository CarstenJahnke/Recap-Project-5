export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <figure>
      <img src={imageSource} alt={name}></img>
      <figcaption>{name}</figcaption>
      <figcaption>{artist}</figcaption>
    </figure>
  );
}
