import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function useDeleteBooking() {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingAPI(bookingId),
    onSuccess: () => {
      toast.success("The booking was successfully deleted");
      queryClient.invalidateQueries({ active: true });
      if (bookingId) navigate("/bookings");
    },
    onError: () => {
      toast.error("The booking couldn't be deleted");
    },
  });
  return { deleteBooking, isDeletingBooking };
}

export default useDeleteBooking;
