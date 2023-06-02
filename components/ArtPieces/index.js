import ArtPiecePreview from "../ArtPiecesPreview";

export function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} {...piece} />
      ))}
    </div>
  );
}
