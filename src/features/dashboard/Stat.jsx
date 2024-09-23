import styled from "styled-components";
import { device } from "../../utils/constants";
import Row from "../../ui/Row";

const Container = styled.div`
  padding: 0 1rem;
  @media ${device.desktop} {
    width: 25%;
  }
  @media ${device.laptopL} {
    width: 50%;
    padding: 0.5rem;
  }
  @media ${"(max-width: 570px)"} {
    width: 100%;
    padding: 0.5rem;
  }
`;

const StyledStat = styled.div`
  /* Box */

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 1.6rem 1.5rem;
  display: flex;

  gap: 1rem;
`;

const Icon = styled.div`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Title = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
`;

function Stat({ icon, title, value, color }) {
  return (
    <Container>
      <StyledStat>
        <Icon color={color}>{icon}</Icon>
        <Row gap="0.5rem">
          <Title>{title}</Title>
          <Value>{value}</Value>
        </Row>
      </StyledStat>
    </Container>
  );
}

export default Stat;
