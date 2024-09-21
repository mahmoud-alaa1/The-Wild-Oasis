import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),

    onSuccess: (data) => {
      toast.success(`The booking #${data.bookingId} successfully checked-out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error(`There was an error while checking out`),
  });
  return { checkout, isCheckingOut };
}

export default useCheckout;
