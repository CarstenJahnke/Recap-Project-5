import { ArtPieces } from "@/components/ArtPieces";
import styled from "styled-components";

export default function ArtPiecesPage({ data }) {
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
