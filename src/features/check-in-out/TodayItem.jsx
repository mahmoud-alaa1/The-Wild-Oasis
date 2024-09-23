import styled from "styled-components";
import Tag from "../../ui/Tag";
import Flag from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";
import { device } from "../../utils/constants";
const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 20rem 9rem 9rem;
  gap: 1.2rem;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media ${`(max-width: 650px)`} {
    grid-template-columns: 9rem auto;
    padding: 2rem;
    row-gap: 2rem;
  }
  @media ${device.mobileL} {
    grid-template-columns: auto;
    padding: 2rem;
    row-gap: 2rem;
  }

  @media ${device.mobileL} {
    grid-template-columns: auto;
    padding: 2rem;
    row-gap: 2rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  return (
    <StyledTodayItem>
      {status == "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status == "checked-in" && <Tag type="blue">Departing</Tag>}
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Flag src={guests.countryFlag} alt={`flag of ${guests.countryFlag}`} />
        <Guest>{guests.fullName}</Guest>
      </div>
      <div>{numNights} Nights</div>
      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
          style={{ width: "fit-content" }}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
