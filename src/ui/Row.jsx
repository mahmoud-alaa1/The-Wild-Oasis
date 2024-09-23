import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: ${props.gap};
    `}
`;

Row.defaultProps = {
  type: "vertical",
  gap: "1.6rem",
};

export default Row;
