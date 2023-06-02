import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

test("Renders Art Pieces Correctly", () => {
  const mockPieces = [
    {
      slug: "orange-red-and-green",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      name: "Orange Red and Green Abstract Painting",
      artist: "Steve Johnson",
    },
    {
      slug: "blue-and-red",
      artist: "Jung-Hua Lui",
      name: "Blue and Red",
      imageSource:
        "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    },
  ];

  render(<ArtPieces pieces={mockPieces} />);

  mockPieces.forEach((piece) => {
    expect(screen.getByAltText(piece.name)).toBeInTheDocument();
    expect(screen.getByText(piece.name)).toBeInTheDocument();
    expect(screen.getByText(piece.artist)).toBeInTheDocument();
  });
});
