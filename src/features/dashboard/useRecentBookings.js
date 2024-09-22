import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numdDays = Number(searchParams.get("last")) || 7;

  const queryDate = subDays(new Date(), numdDays).toISOString();

  const { data: bookings, isPending } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numdDays}`],
    retry: false,
  });

  return { bookings, isPending };
}

export default useRecentBookings;
