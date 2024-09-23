import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledSidebarHeaderAndAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  gap: 1rem;
  & div,
  & ul  {
    display: flex;
  }
  @media ${"(max-width: 420px)"} {
    display: flex;
  }
`;

function SidebarHeaderAndAvatar() {
  return (
    <StyledSidebarHeaderAndAvatar>
      <UserAvatar />
      <HeaderMenu />
    </StyledSidebarHeaderAndAvatar>
  );
}

export default SidebarHeaderAndAvatar;
