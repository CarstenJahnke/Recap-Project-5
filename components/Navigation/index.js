import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Art Pieces</Link>
      </li>
    </ul>
  );
}

const StyledList = styled.ul`
  height: 2rem;

  display: flex;
  justify-content: space-around;
`;
