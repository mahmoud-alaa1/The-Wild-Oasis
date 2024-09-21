import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success("Welcome Mr. A7a");
      navigate("/dashboard");
    },
    onError: (err) => {
      console.err(err.message);
      toast.error("Provided email or passowrd are incorrect");
    },
  });
  return { login, isLogging };
}

export default useLogin;
