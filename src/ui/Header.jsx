import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features//authentication/UserAvatar";
import ButtonIcon from "./ButtonIcon";
import { HiMenu } from "react-icons/hi";
import Row from "../ui/Row";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Row>
        <ButtonIcon>
          <HiMenu />
        </ButtonIcon>
      </Row>
      <Row type="horizontal">
        <UserAvatar />
        <HeaderMenu />
      </Row>
    </StyledHeader>
  );
}

export default Header;
