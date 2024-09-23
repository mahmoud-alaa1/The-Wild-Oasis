import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success(
        "Account is successfully created! Please verify the new account from the user's email address",
        {
          duration: 5000,
        }
      );
    },
    onError: (error) => {
      toast.error("Account couldn't be created");
      console.log(error);
    },
  });
  return { signup, isPending };
}

export default useSignup;
