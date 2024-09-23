import ButtonIcon from "./ButtonIcon";
import { HiXCircle } from "react-icons/hi2";
import { device } from "../utils/constants";
import styled from "styled-components";

const StyledCloseSideBar = styled(ButtonIcon)`
  display: none;
  @media ${device.laptop} {
    display: block;
    position: absolute;
    top: 2%;
    right: 2%;
  }
`;

function CloseSideBar({ sidebarRef }) {
  function handleCloseSideBar() {
    sidebarRef.current.style.transform = "translateX(-100%)";
  }

  return (
    <StyledCloseSideBar onClick={handleCloseSideBar}>
      <HiXCircle />
    </StyledCloseSideBar>
  );
}

export default CloseSideBar;
