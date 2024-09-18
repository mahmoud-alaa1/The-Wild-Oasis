import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
function useSettings() {
  const {
    data: settings,
    error,
    isPending,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return {
    settings,
    error,
    isPending,
  };
}

export default useSettings;