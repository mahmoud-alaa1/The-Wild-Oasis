import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { device } from "../utils/constants";
import { size } from "../utils/constants";
import { useOutsideClick } from "../hooks/useOutsideClick";
import CloseSideBar from "./CloseSideBar";
import { useEffect } from "react";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 4rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: 0.3s ease-in-out;
  height: 100vh;
  @media ${device.laptop} {
    position: absolute;
    transform: translateX(-100%);
  }

  overflow: auto;
`;

function SideBar({ sideBarRef }) {
  return (
    <StyledSidebar ref={sideBarRef}>
      <CloseSideBar sideBarRef={sideBarRef} />
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default SideBar;
