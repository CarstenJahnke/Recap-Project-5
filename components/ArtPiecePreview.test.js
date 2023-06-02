import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

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
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockPiece[0].imageSource
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", mockPiece[0].name);
    expect(screen.getByText(mockPiece[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockPiece[0].artist)).toBeInTheDocument();
  });
});
