import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} {...piece} />
      ))}
    </div>
  );
}
