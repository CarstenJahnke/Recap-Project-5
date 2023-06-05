import ArtPiecePreview from "../ArtPiecesPreview";
import styled from "styled-components";

export function ArtPieces({ pieces }) {
  return (
    <StyledDiv>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} {...piece} />
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
`;
