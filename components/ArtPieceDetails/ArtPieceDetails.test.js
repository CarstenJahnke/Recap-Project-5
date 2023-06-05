// tests/ArtPieceDetails.test.js
import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "../components/ArtPieceDetails";

test("Renders Art Piece Details Correctly", () => {
  const mockPiece = {
    slug: "orange-red-and-green",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    name: "Orange Red and Green Abstract Painting",
    artist: "Steve Johnson",
    year: "2018",
    genre: "Abstract Painting",
  };

  render(
    <ArtPieceDetails 
      image={mockPiece.imageSource} 
      title={mockPiece.name} 
      artist={mockPiece.artist} 
      year={mockPiece.year} 
      genre={mockPiece.genre} 
    />
  );

  expect(screen.getByRole("img")).toHaveAttribute("src", mockPiece.imageSource);
  expect(screen.getByText(mockPiece.name)).toBeInTheDocument();
  expect(screen.getByText(`Artist: ${mockPiece.artist}`)).toBeInTheDocument();
  expect(screen.getByText(`Year: ${mockPiece.year}`)).toBeInTheDocument();
  expect(screen.getByText(`Genre: ${mockPiece.genre}`)).toBeInTheDocument(); });