import { useQuery } from "@tanstack/react-query";
import {getBooking} from "../../services/apiBookings";
import { useParams } from "react-router-dom";
function useBooking() {
  const { bookingId } = useParams();
  const {
    data: booking,
    isPending,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  if (error) {
    console.error("Booking details couldn't be loaded");
    throw new Error(`Couldn't load booking details with id ${bookingId}`);
  }

  return { booking, isPending };
}

export default useBooking;
