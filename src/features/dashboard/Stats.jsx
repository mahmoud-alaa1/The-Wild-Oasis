import { HiOutlineBriefcase } from "react-icons/hi";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1.
  const numBookings = bookings.length;

  //2.
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  //3.
  const checkins = confirmedStays.length;

  //4. occupations= num checked in nights / all avaible nights (number of days * number of cabins)
  const occupation = Math.floor(
    (confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
      (numDays * cabinCount)) *
      100
  );

  return (
    <>
      <Stat
        title={`bookings`}
        color={"blue"}
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title={`Sales`}
        color={"green"}
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title={`Check ins`}
        color={"indigo"}
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title={`Occupancy rate`}
        color={"yellow"}
        icon={<HiOutlineChartBar />}
        value={`${occupation}%`}
      />
    </>
  );
}

export default Stats;
