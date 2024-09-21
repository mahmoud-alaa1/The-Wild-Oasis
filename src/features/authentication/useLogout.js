import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { replace, useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("You have logged out successfuly");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logout, isPending };
}

export default useLogout;
