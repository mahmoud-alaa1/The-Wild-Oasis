import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { device } from "../utils/constants";

const OpenSideMenu = styled(ButtonIcon)`
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

export default OpenSideMenu;
