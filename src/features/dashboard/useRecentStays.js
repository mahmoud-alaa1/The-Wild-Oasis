import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";
function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numdDays = Number(searchParams.get("last")) || 7;

  const queryDate = subDays(new Date(), numdDays).toISOString();

  const { data: stays, isPending } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numdDays}`],
    retry: false,
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status == "checked-out"
  );

  return { stays, isPending, confirmedStays };
}

export default useRecentStays;
