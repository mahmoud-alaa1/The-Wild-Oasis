import styled, { css } from "styled-components";
import { device } from "../utils/constants";

const Heading = styled.h1`
  ${(props) =>
    props.as == "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as == "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as == "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.as == "h4" &&
    css`
      font-size: 1.8rem;
      font-weight: 400;
    `}
  line-height:1.4;
  padding: 0.8rem 0;
  @media ${device.mobileL} {
    padding: 2rem;
  }
`;

export default Heading;
