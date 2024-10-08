import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingAPI(bookingId),
    onSuccess: () => {
      toast.success("The booking was successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("The booking couldn't be deleted");
    },
  });
  return { deleteBooking, isDeletingBooking };
}

export default useDeleteBooking;
