import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledList>
      <StyledListItem>
        <StyledLink href="/">Spotlight</StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      </StyledListItem>
    </StyledList>
  );
}

const StyledList = styled.ul`
  margin: 0;
  padding: 0;

  height: 2rem;

  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: orange;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  transition: 0.3s ease-in;

  &:hover {
    font-size: 1.1rem;
    font-weight: bolder;
  }
`;
