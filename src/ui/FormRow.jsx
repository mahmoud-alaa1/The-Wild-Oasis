import styled from "styled-components";
import { device } from "../utils/constants";
const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  padding: 1.2rem 0;

  flex-wrap: wrap;
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
  @media ${"(max-width: 350px)"} {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && (
        <div style={{ width: `250px` }}>
          <Label htmlFor={children.props.id}>{label}</Label>
        </div>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
