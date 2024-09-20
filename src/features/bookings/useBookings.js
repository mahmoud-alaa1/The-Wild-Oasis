import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
export function useBookings() {
  const {
    data: bookings,
    isPending,
    error,
  } = useQuery({
    queryFn: getBookings,
    queryKey: ["bookings"],
  });

  return {
    bookings,
    isPending,
    error,
  };
}
