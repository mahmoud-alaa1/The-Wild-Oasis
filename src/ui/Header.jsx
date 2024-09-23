import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features//authentication/UserAvatar";
import { HiMenu } from "react-icons/hi";
import Row from "../ui/Row";
import OpenSideMenu from "./OpenSideMenu";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header({ sideBarRef }) {
  function openSideBar() {
    sideBarRef.current.style.transform = "translateX(0)";
  }

  return (
    <StyledHeader>
      <Row>
        <OpenSideMenu onClick={openSideBar}>
          <HiMenu />
        </OpenSideMenu>
      </Row>
      <Row type="horizontal">
        <UserAvatar />
        <HeaderMenu />
      </Row>
    </StyledHeader>
  );
}

export default Header;
