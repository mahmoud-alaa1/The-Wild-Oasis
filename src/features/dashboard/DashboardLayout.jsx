import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const { bookings, isPending: isPendingBookings } = useRecentBookings();
  const { stays, isPending: isPendingStays, confirmedStays } = useRecentStays();

  if (isPendingBookings || isPendingStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Char stay duration</div>
      <div>Char sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
