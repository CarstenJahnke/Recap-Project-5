export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <div>
      <img src={imageSource} alt={name} style={{ width: "50%" }} />
      <div style={{ padding: "2px" }}>
        <h4>
          '{name}' by {artist}
        </h4>
      </div>
    </div>
  );
}
