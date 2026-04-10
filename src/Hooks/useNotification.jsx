import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export default function useNotification() {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: notifications } = useQuery({
    queryKey: ["notificatons"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/notification/${user?.email}`);
      return res.data;
    },
    refetchInterval: 30000,
  });

  return [notifications];
}
