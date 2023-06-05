import { render, screen } from "@testing-library/react";
import Spotlight from ".";

test("Renders Art Pieces Preview Correctly", () => {
  const mockPiece = {
    slug: "orange-red-and-green",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    name: "Orange Red and Green Abstract Painting",
    artist: "Steve Johnson",
  };

  render(<Spotlight image={mockPiece.imageSource} artist={mockPiece.artist} />);

  expect(screen.getByRole("img")).toHaveAttribute("src", mockPiece.imageSource);
  expect(screen.getByText(mockPiece.artist)).toBeInTheDocument();
});
