import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCapin as deleteCapinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleteing, mutate: deleteCapin } = useMutation({
    mutationFn: deleteCapinApi,
    onSuccess: () => {
      toast.success("Cabin Succefully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleteing, deleteCapin };
}
