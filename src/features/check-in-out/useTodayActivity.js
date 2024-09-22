import { useQuery } from "@tanstack/react-query";
import {getStaysTodayActivity} from "../../services/apiBookings";
function useTodayActivity() {
  const { data: todayActivities, isPending } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["toady-activity"],
  });

  return { todayActivities, isPending };
}

export default useTodayActivity;
