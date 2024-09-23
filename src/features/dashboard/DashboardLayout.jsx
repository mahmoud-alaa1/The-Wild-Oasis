import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";

import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { device } from "../../utils/constants";
const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const TodayActivityAndDurationContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  @media ${device.laptopL} {
    flex-direction: column;
  }
`;

function DashboardLayout() {
  const { bookings, isPending: isPendingBookings } = useRecentBookings();

  const {
    isPending: isPendingStays,
    confirmedStays,
    numdDays,
  } = useRecentStays();

  const { cabins, isLoading: isPendingCabins } = useCabins();

  if (isPendingBookings || isPendingStays || isPendingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numdDays}
        cabinCount={cabins.length}
      />
      <TodayActivityAndDurationContainer>
        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
      </TodayActivityAndDurationContainer>
      <SalesChart bookings={bookings} numDays={numdDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
