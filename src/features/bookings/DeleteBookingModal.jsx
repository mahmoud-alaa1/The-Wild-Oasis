import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import useDeleteBooking from "./useDeleteBooking";

function DeleteBookingModal({ bookingId }) {
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();
  return (
    <Modal>
      <Modal.Open opens="delete-cabin">
        <Button variation={`danger`}>Delete Booking</Button>
      </Modal.Open>
      <Modal.Window name="delete-cabin">
        <ConfirmDelete
          onConfirm={() => deleteBooking(bookingId)}
          resourceName={`Booking #${bookingId}`}
          disabled={isDeletingBooking}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteBookingModal;
