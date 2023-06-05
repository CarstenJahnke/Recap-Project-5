import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

test("Renders Art Pieces Preview Correctly", () => {
  const mockPiece = [
    {
      slug: "orange-red-and-green",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      name: "Orange Red and Green Abstract Painting",
      artist: "Steve Johnson",
    },
  ];

  render(<ArtPiecePreview {...mockPiece[0]} />);

  mockPiece.forEach((piece) => {
    expect(screen.getByRole("img")).toHaveAttribute("src", piece.imageSource);
    expect(screen.getByRole("img")).toHaveAttribute("alt", piece.name);

    expect(screen.getByText(piece.name)).toBeInTheDocument();
    expect(screen.getByText(piece.artist)).toBeInTheDocument();
  });
});
